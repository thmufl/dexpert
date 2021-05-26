import { Actor, HttpAgent } from "@dfinity/agent"
import { idlFactory as counter_idl, canisterId as counter_id } from "dfx-generated/counter"
import { idlFactory as profile_idl, canisterId as profile_id } from "dfx-generated/profile"
import { idlFactory as contract_idl, canisterId as contract_id } from "dfx-generated/contract"

const agentOptions = {
  host: "http://localhost:8000",
}

const agent = new HttpAgent(agentOptions)
const counter = Actor.createActor(counter_idl, { agent, canisterId: counter_id })
const profile = Actor.createActor(profile_idl, { agent, canisterId: profile_id })
const contract = Actor.createActor(contract_idl, { agent, canisterId: contract_id })

export { counter, profile, contract }