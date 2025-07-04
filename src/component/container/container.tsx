

interface TBcontainer{
    children:React.ReactNode
}
function Container({children}:TBcontainer) {
  return (
    <div className="Container mx-auto ">
        {children}
    </div>
  )
}

export default Container