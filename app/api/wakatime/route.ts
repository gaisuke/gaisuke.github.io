export const revalidate = 3600;

export async function GET() {
  try {
    const [langsRes, activityRes] = await Promise.all([
      fetch("https://wakatime.com/share/@gaisuke/ec607f20-d4b7-491b-b9d6-f3c771b1d1e7.json"),
      fetch("https://wakatime.com/share/@gaisuke/dd3c0e73-82e5-458a-a80b-c1f7487bd6dc.json"),
    ]);

    const langs = await langsRes.json();
    const activity = await activityRes.json();

    return Response.json({ langs: langs.data, activity: activity.days });
  } catch {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}