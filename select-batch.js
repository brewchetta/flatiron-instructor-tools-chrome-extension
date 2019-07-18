// select batch
browser.storage.local.get("batchId").then(res => console.log);
browser.storage.local.get("batchId").then(res => alert);

getting = browser.storage.local.get("batchId");

getting.then(result => {
  if (result && result.batchId) {
    const s = document.createElement("script");
    s.textContent = `(()=>{
      $('.batches').val(${result.batchId});
      $('.batches').trigger('change');
      console.log(result);
      console.log(result.batchId);
    })()`;
    document.head.appendChild(s);
    s.remove();
  }
});
