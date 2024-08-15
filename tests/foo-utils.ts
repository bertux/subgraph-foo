import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  AutoLiquify,
  OwnershipTransferred,
  Transfer
} from "../generated/Foo/Foo"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createAutoLiquifyEvent(
  amountBNB: BigInt,
  amountBOG: BigInt
): AutoLiquify {
  let autoLiquifyEvent = changetype<AutoLiquify>(newMockEvent())

  autoLiquifyEvent.parameters = new Array()

  autoLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "amountBNB",
      ethereum.Value.fromUnsignedBigInt(amountBNB)
    )
  )
  autoLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "amountBOG",
      ethereum.Value.fromUnsignedBigInt(amountBOG)
    )
  )

  return autoLiquifyEvent
}

export function createOwnershipTransferredEvent(
  owner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
