

interface TBcontainer{
    children:React.ReactNode
}
function Container({children}:TBcontainer) {
  return (
    <div className="container mx-auto">
        {children}
    </div>
  )
}

export default Container