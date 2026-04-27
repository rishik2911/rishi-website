import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'

import { useRef, useState } from 'react'

import {
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)
  const yesRef = useRef(null);

  return (
    <>
      {/* HERO */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen bg-pink-200 px-4 py-10">
        <div className="w-full md:w-2/3 bg-gradient-to-r from-pink-300 to-pink-200 rounded-3xl text-center p-6 md:p-10 shadow-xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white uppercase">
            Hi Beautiful
          </h1>
        </div>
      </div>

      {/* IMAGES */}
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full bg-pink-50 gap-6 p-6">
        <CommentedImage src='/marina1.jpg' text="wow so pretty" />
        <CommentedImage src='/marina2.jpg' text="omg we&apos;re so cute" />
        <CommentedImage src='/marina3.jpg' text="we should kiss?" />
      </div>

      {/* SECTION */}
      <div className="text-center w-full bg-pink-200 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-pink-400 uppercase">
          So I heard...
        </h1>
      </div>

      {/* MAIN PROM TEXT */}
      <div className="flex flex-col items-center text-center w-full bg-pink-50 px-4 py-10 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <h1 className="w-full md:w-1/3 text-pink-300 font-bold text-3xl md:text-5xl">
            You Need
          </h1>

          <img
            src="https://sweezy-cursors.com/wp-content/uploads/cursor/milk-amp-mocha-bear-love/milk-mocha-bear-love-custom-cursor.png"
            className="w-40 sm:w-60 md:w-80"
          />

          <h1 className="w-full md:w-1/3 text-pink-300 font-bold text-3xl md:text-5xl">
            Someone For
          </h1>
        </div>

        <h1 className="text-pink-300 font-bold text-4xl md:text-6xl uppercase">
          prom
        </h1>
      </div>

      {/* TRANSITIONS */}
      <div className="text-center w-full bg-pink-200 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-pink-400 uppercase">
          So...
        </h1>
      </div>

      {/* QUESTIONS */}
      <CornyQuestion
        question="Would you be the Elephant&apos;s Foot to my Chernobyl Disaster?"
        nonactive="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuclear_symbol.svg/1024px-Nuclear_symbol.svg.png"
        active="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76629/nuclear-explosion-clipart-xl.png"
        primary
        left
      />

      <div className="flex flex-col items-center text-center w-full bg-pink-200 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-pink-400 font-bold">
          Would you
        </h1>
      </div>

      <div className="flex flex-col items-center text-center w-full bg-pink-50 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-pink-300 font-bold">
          Uh
        </h1>
      </div>
      <CornyQuestion
        question="Would you be the butt to my Red Guy?"
        nonactive="https://loudbooru.com/_images/a1c2fa54153d30da1045a967fe8fd8a9/9228%20-%20character%3Alincoln_loud%20character%3Athe_red_guy%20cow_and_chicken%20crossover%20devil%20dialogue%20satan.png"
        active="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/860bb581-65ee-4112-854f-1255c5579143/dffb3t8-d1a0991f-db5c-49ff-a7f2-2bc8d3278004.jpg"
        secondary
        right
      />

      <CornyQuestion
        question="Would you be the smut to my Among Us?"
        nonactive="https://assets.stickpng.com/images/61d183263a856e0004c6334a.png"
        active="https://pbs.twimg.com/media/E2ieswGVgAYKWt3.jpg"
        primary
        left
      />

      <CornyQuestion
        question="Would you be the banana to my Minion?"
        nonactive="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a76b087-d923-4acf-85c5-118e6b81c7a0/d70lfsz.png"
        active="https://i.redd.it/v0ep5v1vbl331.png"
        secondary
        right
      />
      

      {/* FINAL QUESTION */}
      <div className="flex flex-col items-center text-center w-full bg-pink-50 py-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-pink-400 font-bold">
          If I&apos;m C would you be my C++ to prom?
        </h1>
      </div>

      {/* BUTTONS */}
      <div className="relative w-full max-w-md h-[200px] mx-auto flex items-center justify-center">
  
        <RandomButton text="No" avoidRef={yesRef}/>
        <button
          ref={yesRef}
          className="px-6 py-3 min-w-[120px] text-lg md:text-2xl rounded-2xl bg-pink-400 text-white z-10" onClick={onOpen}>
            YES
        </button>
      </div>
      

      {/* DIALOG */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              OMG.
            </AlertDialogHeader>

            <AlertDialogBody>
              NO WAY SHE JUST SAID YES?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                colorScheme="pink"
                ref={cancelRef}
                onClick={() => {
                  onClose()
                  setConfirmation(true)
                  setTimeout(() => {
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    })
                  }, 100)
                }}
              >
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* CONFIRMATION */}
      {confirmed && (
        <div className="flex flex-col items-center text-center w-full bg-pink-200 py-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-pink-400 font-bold mb-6">
            Prom Confirmation Ticket
          </h1>

          <div className="flex flex-col items-center gap-4 w-full md:w-2/3 bg-white p-6 rounded-3xl shadow-xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold underline">
              Thank You For Your Confirmation!
            </h2>

            <p className="text-lg opacity-70 italic">Name of Partner</p>
            <p className="text-xl font-bold">Aidan Ouckama</p>

            <p className="text-lg opacity-70 italic">Location</p>
            <p className="text-xl font-bold">
              Grove by the River, Newark
            </p>

            <p className="text-lg opacity-70 italic">Time</p>
            <p className="text-xl font-bold">
              9:00 PM - 11:00 PM
            </p>

            <p className="text-lg opacity-70 italic">Events</p>
            <p className="text-xl font-bold">
              • Dinner • Photos • Prom • Post-Prom •
            </p>
          </div>
        </div>
      )}
    </>
  )
}
