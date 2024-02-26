import LineParagraph from "./LineParagraph"

function Footer() {
  return (
    <footer className="flex justify-between px-10 py-8 items-center mt-8 bg-blue-950 rounded-lg">
      <LineParagraph text='Terms  of Use' />
      <LineParagraph text='Privacy policy' />
      <LineParagraph text='All Rights Reserved' />
    </footer>
  )
}

export default Footer