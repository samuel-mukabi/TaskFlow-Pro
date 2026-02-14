
export function calculateProjectProgress(tasks: { status: string }[]) {
    if (!tasks.length) return 0;

    const completed = tasks.filter(t => t.status === "Completed").length;
    const inReview = tasks.filter(t => t.status === "In Review").length;
    const inProgress = tasks.filter(t => t.status === "In Progress").length;

    const completedProgress = completed * 100;
    const inReviewProgress = inReview * 75;
    const inProgressProgress = inProgress * 25;

    return Math.round(
        (completedProgress + inReviewProgress + inProgressProgress) /
        (tasks.length * 100) * 100
    );
}

export function getDate(end_date: Date | string | undefined) {
    if (!end_date) return "";

    const date = new Date(end_date);

    return date.toLocaleDateString(undefined, {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}