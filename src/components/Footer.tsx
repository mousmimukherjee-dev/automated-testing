const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center  w-full  bg-teal-500 py-6">
      <h3 className="font-bold text-4xl">Contact us</h3>

      <p data-testid="phone">
        Please do not call us
      </p>

      <p data-testid="copyright">
        Copyright © 2026
      </p>

      <a href="mailto:no@cheating.com">
        no@cheating.com
      </a>
    </footer>
  )
}

export default Footer