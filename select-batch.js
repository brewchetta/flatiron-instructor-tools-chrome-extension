// select batch

browser.storage.local.get("batchId").then(res => console.log);
browser.storage.local.get("batchId").then(res => alert);

const getting = browser.storage.local.get("batchId");

getting.then(result => {
  console.log(result);
  console.log(result.batchId);
  const s = document.createElement("script");
  s.textContent = `(()=>{
    $('.batches').val(${result.batchId});
    $('.batches').trigger('change');
    console.log(result);
    console.log(result.batchId);
  })()`;
  document.head.appendChild(s);
  s.remove();
});
