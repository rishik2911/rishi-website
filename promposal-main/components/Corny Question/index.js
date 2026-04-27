import ToggledImage from '../Toggled Image'

const CornyQuestion = ({ question, active, nonactive, secondary, left }) => {
  return (
    <>
      <div
        className={
          left
            ? `flex flex-col md:flex-row-reverse justify-around items-center text-center w-full 
               ${secondary ? "bg-pink-200" : "bg-pink-50"} p-5 md:p-10 gap-5`
            : `flex flex-col md:flex-row justify-around items-center text-center w-full 
               ${secondary ? "bg-pink-200" : "bg-pink-50"} p-5 md:p-10 gap-5`
        }
      >
        <ToggledImage 
          nonactive={nonactive}
          active={active}
        />

        <h1 className={`w-full md:w-2/3 font-bold 
          text-2xl sm:text-3xl md:text-6xl 
          ${secondary ? "text-pink-400" : "text-pink-300"}`}>
          {question}
        </h1>
      </div>
    </>
  )
}

export default CornyQuestion
