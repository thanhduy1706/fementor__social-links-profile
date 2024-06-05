import Attribute from './components/Attribute.jsx'

function App() {
  return (
    <>
    <div className="flex-col h-screen bg-off-black flexCenter">
      <div className="p-4 mx-auto space-y-5 sm:p-8 bg-dark-grey rounded-xl">
        <div className="flex-col space-y-6 flexCenter">
        <img
          src="/images/avatar-jessica.jpeg"
          alt="avatar"
          className="h-24 rounded-full"
        />
        <div className="flex-col space-y-2 flexCenter">
          <h1 className="text-2xl font-semibold text-white">Jessica Randall</h1>
          <p className="text-sm font-semibold text-green">
            London, United Kingdom
          </p>
        </div>

        <p className="text-sm text-white">
          &quot;Front-end developer and avid reader.&quot;
        </p>
        </div>

        <div className="flex-col space-y-4 text-white flexCenter">
          <a
            href="#"
            className="socialButton"
          >
            GitHub
          </a>
          <a
            href="#"
            className="socialButton"
          >
            Frontend Mentor
          </a>
          <a
            href="#"
            className="socialButton"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="socialButton"
          >
            Twitter
          </a>
          <a
            href="#"
            className="socialButton"
          >
            Instagram
          </a>
        </div>
      </div>
      <Attribute/>
    </div>
      </>
  )
}

export default App
