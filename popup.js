document.addEventListener("DOMContentLoaded", () => {
  const batchIdInput = document.querySelector("#batch-id");
  const batchList = document.querySelector("#batch-list");
  const form = document.querySelector("form");

  const getting = browser.storage.local.get("batchId");

  function setBatchInput(result) {
    let id = 0;
    if (result.batchId) {
      id = result.batchId;
    }
    batchIdInput.value = id;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  getting.then(setBatchInput, onError);

  // fetch batches
  // fetch("https://learn.co/api/v1/batch-management/rosters")
  //   .then(r => r.json())
  //   .then(batches => {
  //     batches.sort((b1, b2) => b1.name > b2.name);
  //     batches.forEach(batch => {
  //       const option = document.createElement("option");
  //       option.value = batch.id;
  //       option.textContent = batch.name;
  //       batchList.appendChild(option);
  //     });
  //   })
  //   .catch(console.error);

  // set input value based on storage
  // batchIdInput.value = browser.storage.local.get("batchId");

  form.addEventListener("submit", e => {
    e.preventDefault(); // necessary?
    const batchId = e.target.elements["batchId"].value;
    browser.storage.local.set({ batchId: batchId });
    browser.tabs.executeScript({
      file: `select-batch.js`
    });

    // browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //   browser.tabs.executeScript(tabs[0].id, {
    //     file: `select-batch.js`
    //   });
    // });
    // hide the popup
    window.close();
  });
});
