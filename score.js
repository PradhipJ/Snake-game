export function increment() {
  const val = document.querySelector(".value");
  let score = val.innerHTML;
  score++;
  val.innerHTML = score;
}
