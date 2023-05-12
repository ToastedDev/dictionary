import { Metadata } from "next";
import { notFound } from "next/navigation";

type Data = {
  word: string;
  phonetic?: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  origin: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
      antonyms: string[];
    }[];
  }[];
}[];

async function fetchData(word: string): Promise<Data | null> {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  if (!res.ok) return null;
  return res.json();
}

export function generateMetadata({
  params,
}: {
  params: { word: string };
}): Metadata {
  return {
    title: params.word,
  };
}

export default async function WordPage({
  params,
}: {
  params: Record<"word", string>;
}) {
  const result = await fetchData(params.word);
  if (!result) return notFound();

  const [data] = result;

  return (
    <div className="p-6">
      <h1 className="text-7xl font-bold">{data.word}</h1>
      <h2 className="text-lg italic">
        {data.phonetic ??
          data.phonetics
            .map((phonetic) => phonetic.text)
            .filter(Boolean)
            .join(" • ")}
      </h2>
      <ul className="pt-3 flex flex-col gap-3">
        {data.meanings.map((meaning) => (
          <>
            <li key={meaning.partOfSpeech}>
              <i>{meaning.partOfSpeech}</i>
              <ul className="pl-8 flex flex-col gap-3 list-disc">
                {meaning.definitions.map((definition, index) => (
                  <li key={index}>
                    <p>{definition.definition}</p>
                    {definition.example && (
                      <p className="text-slate-50/50">
                        &quot;{definition.example}&quot;
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
