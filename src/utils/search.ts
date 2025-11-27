const SEARCHABLE_KEYS = [
  "offiNm",
  "aptNm",
  "mhouseNm",
  "houseType",
  "sggNm",
  "umdNm",
  "roadNm",
  "roadNmBonbun",
  "roadNmBubun",
  "bonbun",
  "bubun",
  "jibun",
  "landDongNm",
  "bjdongNm",
  "bdongNm",
];

const normalizeValue = (value: unknown) => {
  if (typeof value === "number") {
    return value.toString();
  }
  if (typeof value === "string") {
    return value;
  }
  return "";
};

const itemMatchesQuery = (item: any, query: string) => {
  if (!item) return false;

  const lowerCaseQuery = query.toLowerCase();
  const primaryFields = SEARCHABLE_KEYS.map((key) => normalizeValue(item?.[key]))
    .filter((val) => val.length > 0)
    .map((val) => val.toLowerCase());

  if (primaryFields.length > 0) {
    return primaryFields.some((value) => value.includes(lowerCaseQuery));
  }

  // fallback: stringify values to avoid missing edge cases
  try {
    return JSON.stringify(item).toLowerCase().includes(lowerCaseQuery);
  } catch {
    return false;
  }
};

export const filterBySearchQuery = (items: any[], query: string) => {
  if (!query || !query.trim()) {
    return items;
  }

  const trimmedQuery = query.trim();
  return items.filter((item) => itemMatchesQuery(item, trimmedQuery));
};
