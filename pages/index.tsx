import ali from '../assets/images/ali.png';
console.log(ali);
export default function Home() {
  console.log(222);
  return (
    <div>
      <h1>标题</h1>
      <img src={ali} alt='' />
    </div>
  );
}
