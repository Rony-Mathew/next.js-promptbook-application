import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className='head_text text-center'>
            <span className='orange_gradient text-center'>Home for AI Prompts</span>
        </h1>
        <p className='desc text-center'>
            Promptbook is a creative space where you can discover, create and share AI prompts.
        </p>

        <Feed />

    </section>
  )
}

export default Home
