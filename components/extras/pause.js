export default async function pause(seg) {
  await fazerPausa(seg);
}

function fazerPausa(tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, tempo);
  });
}