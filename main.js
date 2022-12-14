const p = document.getElementById("reason");

fetch("/reason.json")
  .then((res) => res.json())
  .then((reason) => {
    if (reason.reason === "undefined") {
      p.innerHTML =
        "No reason provided. There is most likely an issue with the site. Please email us at <a href='mailto:contact@unusannusarchive.tk'>contact@unusannusarchive.tk</a> or join our Discord at <a href='https://discord.gg/PbpJz8r4Pr'>https://discord.gg/PbpJz8r4Pr</a>.";
    } else {
      p.innerHTML = reason.reason;
    }
  });
