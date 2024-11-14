async function code() {
  let img = document.querySelector(".imgs");
  let search = document.querySelector(".search");
  let respond = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${search.value}`
  );
  img.src = respond.url;
}
