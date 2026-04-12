import { createFileRoute } from "@tanstack/react-router"
import { motion } from "motion/react"
export const Route = createFileRoute("/hulala/")({
  component: RouteComponent,
})

const CARD_CONTENT = [
  {
    name: "First Card",
    description:
      "hulala hulalal this is a great card wihifin is this i am noma i fsjj hkjdsf jjkhgbdkfsbkjhikhy hkdhfkhk hkjhdfskh ",
    skeleton: (
      <>
        <div className="h-1/2 w-64 rounded-xl border border-red-500/60 bg-red-600 p-2 text-3xl"></div>
      </>
    ),
    card_color: "red",
    off: [1, 3],
  },
  {
    name: "Second Card",
    description:
      "hulala hulalal this is a great card wihifin is this i am noma i fsjj hkjdsf jjkhgbdkfsbkjhikhy hkdhfkhk hkjhdfskh ",
    skeleton: (
      <>
        <div className="h-1/2 w-64 rounded-xl border border-yellow-500/60 bg-yellow-600 p-2 text-3xl"></div>
      </>
    ),
    card_color: "yellow",
    off: [1, 3],
  },
  {
    name: "Third Card",
    description:
      "hulala hulalal this is a great card wihifin is this i am noma i fsjj hkjdsf jjkhgbdkfsbkjhikhy hkdhfkhk hkjhdfskh ",
    skeleton: (
      <>
        <div className="h-1/2 w-64 rounded-xl border border-emerald-500/60 bg-emerald-600 p-2 text-3xl"></div>
      </>
    ),
    card_color: "emerald",
    off: [1, 3],
  },
]

function RouteComponent() {
  return (
    <div className="flex h-screen w-full flex-row items-center justify-center">
      <Cards />
    </div>
  )
}

function Cards() {
  return (
    <div className="flex gap-2">
      {CARD_CONTENT.map((i) => {
        return (
          <motion.div
            className={`relative flex h-86 w-full flex-col rounded-xl bg-${i.card_color}-500 p-1`}
            style={{
              rotateX: 12,
              rotateY: i.off[1],
            }}
          >
            {i.skeleton}
            <div className="m-1 flex-1">
              <h1 className="text-2xl text-red-50 uppercase">{i.name}</h1>
              {/*<span className="w-2">
                {i.description}
              </span>*/}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
