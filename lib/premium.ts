
export function isPremium(): boolean {
  if (typeof window !== "undefined") {
    return localStorage.getItem("2beb_premium") === "true";
  }
  return false;
}

export function canGenerate(): boolean {
  if (isPremium()) return true;
  const used = parseInt(localStorage.getItem("2beb_usage") || "0");
  return used < 5;
}

export function increaseUsage() {
  if (isPremium()) return;
  const used = parseInt(localStorage.getItem("2beb_usage") || "0");
  localStorage.setItem("2beb_usage", (used + 1).toString());
}
