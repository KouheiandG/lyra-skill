// lib/nlp-engine.ts

export function extractSkillsFromText(text: string) {
  // テスト用の仮ロジック（あとでGがNLP設計）
  const lines = text.split("\n").filter(Boolean);
  return lines.map(line => ({
    name: line.trim(),
    depth: "mid",
    value: ["探究心"]
  }));
}
