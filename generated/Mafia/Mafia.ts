// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Action extends ethereum.Event {
  get params(): Action__Params {
    return new Action__Params(this);
  }
}

export class Action__Params {
  _event: Action;

  constructor(event: Action) {
    this._event = event;
  }

  get _playerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get playersTakenAction(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }
}

export class CastVote extends ethereum.Event {
  get params(): CastVote__Params {
    return new CastVote__Params(this);
  }
}

export class CastVote__Params {
  _event: CastVote;

  constructor(event: CastVote) {
    this._event = event;
  }

  get _voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _playerId(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class CheckMafia extends ethereum.Event {
  get params(): CheckMafia__Params {
    return new CheckMafia__Params(this);
  }
}

export class CheckMafia__Params {
  _event: CheckMafia;

  constructor(event: CheckMafia) {
    this._event = event;
  }

  get _mafiaKilled(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class EIP712DomainChanged extends ethereum.Event {
  get params(): EIP712DomainChanged__Params {
    return new EIP712DomainChanged__Params(this);
  }
}

export class EIP712DomainChanged__Params {
  _event: EIP712DomainChanged;

  constructor(event: EIP712DomainChanged) {
    this._event = event;
  }
}

export class Exiled extends ethereum.Event {
  get params(): Exiled__Params {
    return new Exiled__Params(this);
  }
}

export class Exiled__Params {
  _event: Exiled;

  constructor(event: Exiled) {
    this._event = event;
  }

  get _playerExiled(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class InitGame extends ethereum.Event {
  get params(): InitGame__Params {
    return new InitGame__Params(this);
  }
}

export class InitGame__Params {
  _event: InitGame;

  constructor(event: InitGame) {
    this._event = event;
  }

  get _gameCount(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class JoinGame extends ethereum.Event {
  get params(): JoinGame__Params {
    return new JoinGame__Params(this);
  }
}

export class JoinGame__Params {
  _event: JoinGame;

  constructor(event: JoinGame) {
    this._event = event;
  }

  get _playerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get playerAddresses(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }
}

export class Killed extends ethereum.Event {
  get params(): Killed__Params {
    return new Killed__Params(this);
  }
}

export class Killed__Params {
  _event: Killed;

  constructor(event: Killed) {
    this._event = event;
  }

  get _playerKilled(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NewRound extends ethereum.Event {
  get params(): NewRound__Params {
    return new NewRound__Params(this);
  }
}

export class NewRound__Params {
  _event: NewRound;

  constructor(event: NewRound) {
    this._event = event;
  }

  get roundCount(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class NewState extends ethereum.Event {
  get params(): NewState__Params {
    return new NewState__Params(this);
  }
}

export class NewState__Params {
  _event: NewState;

  constructor(event: NewState) {
    this._event = event;
  }

  get gameState(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class NextDay extends ethereum.Event {
  get params(): NextDay__Params {
    return new NextDay__Params(this);
  }
}

export class NextDay__Params {
  _event: NextDay;

  constructor(event: NextDay) {
    this._event = event;
  }

  get _killed(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class Voted extends ethereum.Event {
  get params(): Voted__Params {
    return new Voted__Params(this);
  }
}

export class Voted__Params {
  _event: Voted;

  constructor(event: Voted) {
    this._event = event;
  }

  get voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get playerId(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get votes(): i32 {
    return this._event.parameters[2].value.toI32();
  }
}

export class Mafia__eip712DomainResult {
  value0: Bytes;
  value1: string;
  value2: string;
  value3: BigInt;
  value4: Address;
  value5: Bytes;
  value6: Array<BigInt>;

  constructor(
    value0: Bytes,
    value1: string,
    value2: string,
    value3: BigInt,
    value4: Address,
    value5: Bytes,
    value6: Array<BigInt>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromFixedBytes(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigIntArray(this.value6));
    return map;
  }

  getFields(): Bytes {
    return this.value0;
  }

  getName(): string {
    return this.value1;
  }

  getVersion(): string {
    return this.value2;
  }

  getChainId(): BigInt {
    return this.value3;
  }

  getVerifyingContract(): Address {
    return this.value4;
  }

  getSalt(): Bytes {
    return this.value5;
  }

  getExtensions(): Array<BigInt> {
    return this.value6;
  }
}

export class Mafia__idToPlayerResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }

  getPlayerId(): BigInt {
    return this.value0;
  }

  getPlayerAddress(): Address {
    return this.value1;
  }

  getRole(): BigInt {
    return this.value2;
  }

  getAlive(): boolean {
    return this.value3;
  }
}

export class Mafia__playersResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }

  getPlayerId(): BigInt {
    return this.value0;
  }

  getPlayerAddress(): Address {
    return this.value1;
  }

  getRole(): BigInt {
    return this.value2;
  }

  getAlive(): boolean {
    return this.value3;
  }
}

export class Mafia extends ethereum.SmartContract {
  static bind(address: Address): Mafia {
    return new Mafia("Mafia", address);
  }

  MAX_PLAYERS(): i32 {
    let result = super.call("MAX_PLAYERS", "MAX_PLAYERS():(uint8)", []);

    return result[0].toI32();
  }

  try_MAX_PLAYERS(): ethereum.CallResult<i32> {
    let result = super.tryCall("MAX_PLAYERS", "MAX_PLAYERS():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  actionCount(): i32 {
    let result = super.call("actionCount", "actionCount():(uint8)", []);

    return result[0].toI32();
  }

  try_actionCount(): ethereum.CallResult<i32> {
    let result = super.tryCall("actionCount", "actionCount():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  eip712Domain(): Mafia__eip712DomainResult {
    let result = super.call(
      "eip712Domain",
      "eip712Domain():(bytes1,string,string,uint256,address,bytes32,uint256[])",
      []
    );

    return new Mafia__eip712DomainResult(
      result[0].toBytes(),
      result[1].toString(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBytes(),
      result[6].toBigIntArray()
    );
  }

  try_eip712Domain(): ethereum.CallResult<Mafia__eip712DomainResult> {
    let result = super.tryCall(
      "eip712Domain",
      "eip712Domain():(bytes1,string,string,uint256,address,bytes32,uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Mafia__eip712DomainResult(
        value[0].toBytes(),
        value[1].toString(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBytes(),
        value[6].toBigIntArray()
      )
    );
  }

  gameState(): i32 {
    let result = super.call("gameState", "gameState():(uint8)", []);

    return result[0].toI32();
  }

  try_gameState(): ethereum.CallResult<i32> {
    let result = super.tryCall("gameState", "gameState():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getPlayersArray(): Array<Address> {
    let result = super.call(
      "getPlayersArray",
      "getPlayersArray():(address[])",
      []
    );

    return result[0].toAddressArray();
  }

  try_getPlayersArray(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getPlayersArray",
      "getPlayersArray():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  hasTakenAction(param0: i32, param1: Address): boolean {
    let result = super.call(
      "hasTakenAction",
      "hasTakenAction(uint8,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
        ethereum.Value.fromAddress(param1),
      ]
    );

    return result[0].toBoolean();
  }

  try_hasTakenAction(
    param0: i32,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasTakenAction",
      "hasTakenAction(uint8,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
        ethereum.Value.fromAddress(param1),
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  hasVoted(param0: i32, param1: Address): boolean {
    let result = super.call("hasVoted", "hasVoted(uint8,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
      ethereum.Value.fromAddress(param1),
    ]);

    return result[0].toBoolean();
  }

  try_hasVoted(param0: i32, param1: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasVoted", "hasVoted(uint8,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
      ethereum.Value.fromAddress(param1),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  idToPlayer(param0: i32): Mafia__idToPlayerResult {
    let result = super.call(
      "idToPlayer",
      "idToPlayer(uint8):(uint256,address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))]
    );

    return new Mafia__idToPlayerResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_idToPlayer(param0: i32): ethereum.CallResult<Mafia__idToPlayerResult> {
    let result = super.tryCall(
      "idToPlayer",
      "idToPlayer(uint8):(uint256,address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Mafia__idToPlayerResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }

  investigatedPlayerId(): BigInt {
    let result = super.call(
      "investigatedPlayerId",
      "investigatedPlayerId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_investigatedPlayerId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "investigatedPlayerId",
      "investigatedPlayerId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isCaught(): BigInt {
    let result = super.call("isCaught", "isCaught():(uint256)", []);

    return result[0].toBigInt();
  }

  try_isCaught(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("isCaught", "isCaught():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isMafiaKilled(): i32 {
    let result = super.call("isMafiaKilled", "isMafiaKilled():(uint8)", []);

    return result[0].toI32();
  }

  try_isMafiaKilled(): ethereum.CallResult<i32> {
    let result = super.tryCall("isMafiaKilled", "isMafiaKilled():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  killedPlayerId(): BigInt {
    let result = super.call("killedPlayerId", "killedPlayerId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_killedPlayerId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "killedPlayerId",
      "killedPlayerId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  largestVoteCount(): i32 {
    let result = super.call(
      "largestVoteCount",
      "largestVoteCount():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_largestVoteCount(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "largestVoteCount",
      "largestVoteCount():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  playerIdWithLargestVoteCount(): i32 {
    let result = super.call(
      "playerIdWithLargestVoteCount",
      "playerIdWithLargestVoteCount():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_playerIdWithLargestVoteCount(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "playerIdWithLargestVoteCount",
      "playerIdWithLargestVoteCount():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  playerKillCount(): i32 {
    let result = super.call("playerKillCount", "playerKillCount():(uint8)", []);

    return result[0].toI32();
  }

  try_playerKillCount(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "playerKillCount",
      "playerKillCount():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  playerKilled(): i32 {
    let result = super.call("playerKilled", "playerKilled():(uint8)", []);

    return result[0].toI32();
  }

  try_playerKilled(): ethereum.CallResult<i32> {
    let result = super.tryCall("playerKilled", "playerKilled():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  playerVoteCount(param0: i32, param1: i32): i32 {
    let result = super.call(
      "playerVoteCount",
      "playerVoteCount(uint8,uint8):(uint8)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param1)),
      ]
    );

    return result[0].toI32();
  }

  try_playerVoteCount(param0: i32, param1: i32): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "playerVoteCount",
      "playerVoteCount(uint8,uint8):(uint8)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param1)),
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  players(param0: Address): Mafia__playersResult {
    let result = super.call(
      "players",
      "players(address):(uint256,address,uint256,bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Mafia__playersResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_players(param0: Address): ethereum.CallResult<Mafia__playersResult> {
    let result = super.tryCall(
      "players",
      "players(address):(uint256,address,uint256,bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Mafia__playersResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }

  playersList(param0: BigInt): Address {
    let result = super.call("playersList", "playersList(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toAddress();
  }

  try_playersList(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "playersList",
      "playersList(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  playersTakenActions(param0: BigInt): Address {
    let result = super.call(
      "playersTakenActions",
      "playersTakenActions(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_playersTakenActions(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "playersTakenActions",
      "playersTakenActions(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  savedPlayerId(): BigInt {
    let result = super.call("savedPlayerId", "savedPlayerId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_savedPlayerId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "savedPlayerId",
      "savedPlayerId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tieExists(): boolean {
    let result = super.call("tieExists", "tieExists():(bool)", []);

    return result[0].toBoolean();
  }

  try_tieExists(): ethereum.CallResult<boolean> {
    let result = super.tryCall("tieExists", "tieExists():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  viewCaught(publicKey: Bytes, signature: Bytes): Bytes {
    let result = super.call("viewCaught", "viewCaught(bytes32,bytes):(bytes)", [
      ethereum.Value.fromFixedBytes(publicKey),
      ethereum.Value.fromBytes(signature),
    ]);

    return result[0].toBytes();
  }

  try_viewCaught(
    publicKey: Bytes,
    signature: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "viewCaught",
      "viewCaught(bytes32,bytes):(bytes)",
      [
        ethereum.Value.fromFixedBytes(publicKey),
        ethereum.Value.fromBytes(signature),
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  viewOwnRole(publicKey: Bytes, signature: Bytes): Bytes {
    let result = super.call(
      "viewOwnRole",
      "viewOwnRole(bytes32,bytes):(bytes)",
      [
        ethereum.Value.fromFixedBytes(publicKey),
        ethereum.Value.fromBytes(signature),
      ]
    );

    return result[0].toBytes();
  }

  try_viewOwnRole(
    publicKey: Bytes,
    signature: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "viewOwnRole",
      "viewOwnRole(bytes32,bytes):(bytes)",
      [
        ethereum.Value.fromFixedBytes(publicKey),
        ethereum.Value.fromBytes(signature),
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  voteCount(): i32 {
    let result = super.call("voteCount", "voteCount():(uint8)", []);

    return result[0].toI32();
  }

  try_voteCount(): ethereum.CallResult<i32> {
    let result = super.tryCall("voteCount", "voteCount():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class _resetDayCall extends ethereum.Call {
  get inputs(): _resetDayCall__Inputs {
    return new _resetDayCall__Inputs(this);
  }

  get outputs(): _resetDayCall__Outputs {
    return new _resetDayCall__Outputs(this);
  }
}

export class _resetDayCall__Inputs {
  _call: _resetDayCall;

  constructor(call: _resetDayCall) {
    this._call = call;
  }
}

export class _resetDayCall__Outputs {
  _call: _resetDayCall;

  constructor(call: _resetDayCall) {
    this._call = call;
  }
}

export class ActionCall extends ethereum.Call {
  get inputs(): ActionCall__Inputs {
    return new ActionCall__Inputs(this);
  }

  get outputs(): ActionCall__Outputs {
    return new ActionCall__Outputs(this);
  }
}

export class ActionCall__Inputs {
  _call: ActionCall;

  constructor(call: ActionCall) {
    this._call = call;
  }

  get selectedPlayer(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ActionCall__Outputs {
  _call: ActionCall;

  constructor(call: ActionCall) {
    this._call = call;
  }
}

export class CastVoteCall extends ethereum.Call {
  get inputs(): CastVoteCall__Inputs {
    return new CastVoteCall__Inputs(this);
  }

  get outputs(): CastVoteCall__Outputs {
    return new CastVoteCall__Outputs(this);
  }
}

export class CastVoteCall__Inputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }

  get _playerId(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class CastVoteCall__Outputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }
}

export class CheckIfMafiaKilledCall extends ethereum.Call {
  get inputs(): CheckIfMafiaKilledCall__Inputs {
    return new CheckIfMafiaKilledCall__Inputs(this);
  }

  get outputs(): CheckIfMafiaKilledCall__Outputs {
    return new CheckIfMafiaKilledCall__Outputs(this);
  }
}

export class CheckIfMafiaKilledCall__Inputs {
  _call: CheckIfMafiaKilledCall;

  constructor(call: CheckIfMafiaKilledCall) {
    this._call = call;
  }
}

export class CheckIfMafiaKilledCall__Outputs {
  _call: CheckIfMafiaKilledCall;

  constructor(call: CheckIfMafiaKilledCall) {
    this._call = call;
  }
}

export class InitializeGameCall extends ethereum.Call {
  get inputs(): InitializeGameCall__Inputs {
    return new InitializeGameCall__Inputs(this);
  }

  get outputs(): InitializeGameCall__Outputs {
    return new InitializeGameCall__Outputs(this);
  }
}

export class InitializeGameCall__Inputs {
  _call: InitializeGameCall;

  constructor(call: InitializeGameCall) {
    this._call = call;
  }

  get roles(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class InitializeGameCall__Outputs {
  _call: InitializeGameCall;

  constructor(call: InitializeGameCall) {
    this._call = call;
  }
}

export class JoinGameCall extends ethereum.Call {
  get inputs(): JoinGameCall__Inputs {
    return new JoinGameCall__Inputs(this);
  }

  get outputs(): JoinGameCall__Outputs {
    return new JoinGameCall__Outputs(this);
  }
}

export class JoinGameCall__Inputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }
}

export class JoinGameCall__Outputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }
}

export class RevealNextDayCall extends ethereum.Call {
  get inputs(): RevealNextDayCall__Inputs {
    return new RevealNextDayCall__Inputs(this);
  }

  get outputs(): RevealNextDayCall__Outputs {
    return new RevealNextDayCall__Outputs(this);
  }
}

export class RevealNextDayCall__Inputs {
  _call: RevealNextDayCall;

  constructor(call: RevealNextDayCall) {
    this._call = call;
  }
}

export class RevealNextDayCall__Outputs {
  _call: RevealNextDayCall;

  constructor(call: RevealNextDayCall) {
    this._call = call;
  }
}
