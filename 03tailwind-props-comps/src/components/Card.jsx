/* eslint-disable react/prop-types */
function Card({username = 'SR', post = 'Not assigned yet', profilePhoto= 'noImage'}) {
  return (
    <div>
      <figure className='md:flex bg-slate-100 rounded-xl mt-4 p-8 md:p-0 dark:bg-slate-800'>
        <img
          className='w-24 h-24 md:w-48 object-cover md:h-auto rounded-full md:rounded-none md:rounded-l-lg  mx-auto'
          src={profilePhoto}
          alt='profile Image'
          width='384'
          height='512'
        />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <blockquote>
            <p className='text-lg font-medium'>
              “Tailwind CSS is the only framework that I’ve seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark:text-sky-400'>
              {username}</div>
            <div className='text-slate-700 dark:text-slate-500'>
              {post}
            </div>
          </figcaption>
        </div>
      </figure>

    </div>
  );
}

export default Card;
