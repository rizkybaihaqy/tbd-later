export const DETA_PROJECT_KEY = process.env.DETA_PROJECT_KEY;
export const DETA_PROJECT_ID = DETA_PROJECT_KEY.split("_")[0];
export const DETA_BASE_URL = `https://database.deta.sh/v1/${DETA_PROJECT_ID}`;
export const DETA_DRIVE_URL = `https://drive.deta.sh/v1/${DETA_PROJECT_ID}`;
export const DETA_HEADERS = {
  "X-API-Key": DETA_PROJECT_KEY,
  "Content-Type": "application/json",
};
