import { useRouter } from 'next/router';

function Quiz() {
  const {
    query: { name },
  } = useRouter();

  return (
    <div>
      <h1>Quiz {name}</h1>
    </div>
  );
}

export default Quiz;
