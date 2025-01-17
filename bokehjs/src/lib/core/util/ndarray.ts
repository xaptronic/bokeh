import {NDDataType, TypedArray} from "../types"
import {isObject, isArray} from "./types"
import {BYTE_ORDER} from "./platform"
import {equals, Equatable, Comparator} from "./eq"
import {serialize, Serializable, Serializer, ArrayRep, BytesRep, NDArrayRep} from "../serialization"

const __ndarray__ = Symbol("__ndarray__")

function encode_NDArray(array: NDArray, serializer: Serializer): NDArrayRep {
  const encoded = serializer.encode(array.dtype == "object" ? Array.from(array) : array.buffer)
  return {
    type: "ndarray",
    array: encoded as ArrayRep | BytesRep,
    order: BYTE_ORDER,
    dtype: array.dtype,
    shape: array.shape,
  }
}

export interface NDArrayType extends Equatable, Serializable {
  readonly [__ndarray__]: boolean
  readonly dtype: NDDataType
  readonly shape: number[]
  readonly dimension: number
}

type Array1d = {dimension: 1, shape: [number]}
type Array2d = {dimension: 2, shape: [number, number]}

export type Uint32Array1d  = Uint32NDArray  & Array1d
export type Uint8Array1d   = Uint8NDArray   & Array1d
export type Uint8Array2d   = Uint8NDArray   & Array2d
export type Float32Array2d = Float32NDArray & Array2d
export type Float64Array2d = Float64NDArray & Array2d
export type FloatArray2d   = Float32Array2d | Float64Array2d

export class BoolNDArray extends Uint8Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "bool" = "bool"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number> | ArrayBufferLike, shape?: number[]) {
    super(seq)
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export class Uint8NDArray extends Uint8Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "uint8" = "uint8"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number> | ArrayBufferLike, shape?: number[]) {
    super(seq)
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export class Int8NDArray extends Int8Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "int8" = "int8"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number> | ArrayBufferLike, shape?: number[]) {
    super(seq)
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export class Uint16NDArray extends Uint16Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "uint16" = "uint16"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number> | ArrayBufferLike, shape?: number[]) {
    super(seq)
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export class Int16NDArray extends Int16Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "int16" = "int16"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number> | ArrayBufferLike, shape?: number[]) {
    super(seq)
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export class Uint32NDArray extends Uint32Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "uint32" = "uint32"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number> | ArrayBufferLike, shape?: number[]) {
    super(seq)
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export class Int32NDArray extends Int32Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "int32" = "int32"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number> | ArrayBufferLike, shape?: number[]) {
    super(seq)
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export class Float32NDArray extends Float32Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "float32" = "float32"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number> | ArrayBufferLike, shape?: number[]) {
    super(seq)
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export class Float64NDArray extends Float64Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "float64" = "float64"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number> | ArrayBufferLike, shape?: number[]) {
    super(seq)
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export class ObjectNDArray extends Array implements NDArrayType {
  readonly [__ndarray__] = true
  readonly dtype: "object" = "object"
  readonly shape: number[]
  readonly dimension: number

  constructor(seq: ArrayLike<number>/* | ArrayBufferLike*/, shape?: number[]) {
    /* TODO: TS 4.6
    if (seq instanceof ArrayBuffer) {
      throw new Error("not supported with dtype='object'")
    }
    */
    super(seq.length)
    for (let i = 0; i < seq.length; i++) {
      this[i] = seq[i]
    }
    this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length])
    this.dimension = this.shape.length
  }

  [equals](that: this, cmp: Comparator): boolean {
    return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that)
  }

  [serialize](serializer: Serializer): unknown {
    return encode_NDArray(this, serializer)
  }
}

export type NDArray =
  BoolNDArray    |
  Uint8NDArray   | Int8NDArray    |
  Uint16NDArray  | Int16NDArray   |
  Uint32NDArray  | Int32NDArray   |
  Float32NDArray | Float64NDArray |
  ObjectNDArray

export function is_NDArray(v: unknown): v is NDArray {
  return isObject(v) && __ndarray__ in v
}

export type NDArrayTypes = {
  "bool":    {typed: Uint8Array,   ndarray: BoolNDArray}
  "uint8":   {typed: Uint8Array,   ndarray: Uint8NDArray}
  "int8":    {typed: Int8Array,    ndarray: Int8NDArray}
  "uint16":  {typed: Uint16Array,  ndarray: Uint16NDArray}
  "int16":   {typed: Int16Array,   ndarray: Int16NDArray}
  "uint32":  {typed: Uint32Array,  ndarray: Uint32NDArray}
  "int32":   {typed: Int32Array,   ndarray: Int32NDArray}
  "float32": {typed: Float32Array, ndarray: Float32NDArray}
  "float64": {typed: Float64Array, ndarray: Float64NDArray}
  "object":  {typed: unknown[],    ndarray: ObjectNDArray}
}

export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "bool", shape: [number]}): BoolNDArray & Array1d
export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "uint8", shape: [number]}): Uint8NDArray & Array1d
export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "uint8", shape: [number, number]}): Uint8NDArray & Array2d
export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "uint32", shape: [number]}): Uint32NDArray & Array1d
export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "uint32", shape: [number, number]}): Uint32NDArray & Array2d
export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "float32", shape: [number]}): Float32NDArray & Array1d
export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "float32", shape: [number, number]}): Float32NDArray & Array2d
export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "float64", shape: [number]}): Float64NDArray & Array1d
export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "float64", shape: [number, number]}): Float64NDArray & Array2d
export function ndarray(array: ArrayBuffer | ArrayLike<number>, options: {dtype: "object", shape: [number, number]}): ObjectNDArray & Array2d

export function ndarray<K extends NDDataType = "float64">(array: ArrayBuffer | ArrayLike<number>, options?: {dtype?: K, shape?: number[]}): NDArrayTypes[K]["ndarray"]
export function ndarray<K extends NDDataType>(array: NDArrayTypes[K]["typed"], options?: {dtype?: K, shape?: number[]}): NDArrayTypes[K]["ndarray"]

export function ndarray(array: ArrayBuffer | TypedArray | ArrayLike<number>, options: {dtype?: NDDataType, shape?: number[]} = {}): NDArray {
  let {dtype} = options
  if (dtype == null) {
    if (array instanceof ArrayBuffer || isArray(array)) {
      dtype = "float64"
    } else {
      dtype = (() => {
        switch (true) {
          case array instanceof Uint8Array:   return "uint8"
          case array instanceof Int8Array:    return "int8"
          case array instanceof Uint16Array:  return "uint16"
          case array instanceof Int16Array:   return "int16"
          case array instanceof Uint32Array:  return "uint32"
          case array instanceof Int32Array:   return "int32"
          case array instanceof Float32Array: return "float32"
          case array instanceof Float64Array: return "float64"
          default:                            return "object"
        }
      })()
    }
  }
  const {shape} = options
  switch (dtype) {
    case "bool":    return new BoolNDArray(array, shape)
    case "uint8":   return new Uint8NDArray(array, shape)
    case "int8":    return new Int8NDArray(array, shape)
    case "uint16":  return new Uint16NDArray(array, shape)
    case "int16":   return new Int16NDArray(array, shape)
    case "uint32":  return new Uint32NDArray(array, shape)
    case "int32":   return new Int32NDArray(array, shape)
    case "float32": return new Float32NDArray(array, shape)
    case "float64": return new Float64NDArray(array, shape)
    default:        return new ObjectNDArray(array as any, shape) // TODO: TS 4.6
  }
}
