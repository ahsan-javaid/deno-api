// Runs every minute
Deno.cron("Task", "* * * * *", () => {
  console.log("This will print once a minute.");
});

export {}