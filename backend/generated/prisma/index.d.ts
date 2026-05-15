
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Deporte
 * 
 */
export type Deporte = $Result.DefaultSelection<Prisma.$DeportePayload>
/**
 * Model Cancha
 * 
 */
export type Cancha = $Result.DefaultSelection<Prisma.$CanchaPayload>
/**
 * Model Horario
 * 
 */
export type Horario = $Result.DefaultSelection<Prisma.$HorarioPayload>
/**
 * Model Visitante
 * 
 */
export type Visitante = $Result.DefaultSelection<Prisma.$VisitantePayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoReserva: {
  ACTIVA: 'ACTIVA',
  CANCELADA: 'CANCELADA',
  ELIMINADA: 'ELIMINADA'
};

export type EstadoReserva = (typeof EstadoReserva)[keyof typeof EstadoReserva]

}

export type EstadoReserva = $Enums.EstadoReserva

export const EstadoReserva: typeof $Enums.EstadoReserva

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Deportes
 * const deportes = await prisma.deporte.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Deportes
   * const deportes = await prisma.deporte.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.deporte`: Exposes CRUD operations for the **Deporte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deportes
    * const deportes = await prisma.deporte.findMany()
    * ```
    */
  get deporte(): Prisma.DeporteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cancha`: Exposes CRUD operations for the **Cancha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Canchas
    * const canchas = await prisma.cancha.findMany()
    * ```
    */
  get cancha(): Prisma.CanchaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horario`: Exposes CRUD operations for the **Horario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios
    * const horarios = await prisma.horario.findMany()
    * ```
    */
  get horario(): Prisma.HorarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitante`: Exposes CRUD operations for the **Visitante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitantes
    * const visitantes = await prisma.visitante.findMany()
    * ```
    */
  get visitante(): Prisma.VisitanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Deporte: 'Deporte',
    Cancha: 'Cancha',
    Horario: 'Horario',
    Visitante: 'Visitante',
    Reserva: 'Reserva'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "deporte" | "cancha" | "horario" | "visitante" | "reserva"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Deporte: {
        payload: Prisma.$DeportePayload<ExtArgs>
        fields: Prisma.DeporteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeporteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeporteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload>
          }
          findFirst: {
            args: Prisma.DeporteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeporteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload>
          }
          findMany: {
            args: Prisma.DeporteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload>[]
          }
          create: {
            args: Prisma.DeporteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload>
          }
          createMany: {
            args: Prisma.DeporteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeporteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload>[]
          }
          delete: {
            args: Prisma.DeporteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload>
          }
          update: {
            args: Prisma.DeporteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload>
          }
          deleteMany: {
            args: Prisma.DeporteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeporteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeporteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload>[]
          }
          upsert: {
            args: Prisma.DeporteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeportePayload>
          }
          aggregate: {
            args: Prisma.DeporteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeporte>
          }
          groupBy: {
            args: Prisma.DeporteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeporteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeporteCountArgs<ExtArgs>
            result: $Utils.Optional<DeporteCountAggregateOutputType> | number
          }
        }
      }
      Cancha: {
        payload: Prisma.$CanchaPayload<ExtArgs>
        fields: Prisma.CanchaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CanchaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CanchaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload>
          }
          findFirst: {
            args: Prisma.CanchaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CanchaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload>
          }
          findMany: {
            args: Prisma.CanchaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload>[]
          }
          create: {
            args: Prisma.CanchaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload>
          }
          createMany: {
            args: Prisma.CanchaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CanchaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload>[]
          }
          delete: {
            args: Prisma.CanchaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload>
          }
          update: {
            args: Prisma.CanchaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload>
          }
          deleteMany: {
            args: Prisma.CanchaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CanchaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CanchaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload>[]
          }
          upsert: {
            args: Prisma.CanchaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanchaPayload>
          }
          aggregate: {
            args: Prisma.CanchaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCancha>
          }
          groupBy: {
            args: Prisma.CanchaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CanchaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CanchaCountArgs<ExtArgs>
            result: $Utils.Optional<CanchaCountAggregateOutputType> | number
          }
        }
      }
      Horario: {
        payload: Prisma.$HorarioPayload<ExtArgs>
        fields: Prisma.HorarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          findFirst: {
            args: Prisma.HorarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          findMany: {
            args: Prisma.HorarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>[]
          }
          create: {
            args: Prisma.HorarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          createMany: {
            args: Prisma.HorarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>[]
          }
          delete: {
            args: Prisma.HorarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          update: {
            args: Prisma.HorarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          deleteMany: {
            args: Prisma.HorarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>[]
          }
          upsert: {
            args: Prisma.HorarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPayload>
          }
          aggregate: {
            args: Prisma.HorarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorario>
          }
          groupBy: {
            args: Prisma.HorarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorarioCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioCountAggregateOutputType> | number
          }
        }
      }
      Visitante: {
        payload: Prisma.$VisitantePayload<ExtArgs>
        fields: Prisma.VisitanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload>
          }
          findFirst: {
            args: Prisma.VisitanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload>
          }
          findMany: {
            args: Prisma.VisitanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload>[]
          }
          create: {
            args: Prisma.VisitanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload>
          }
          createMany: {
            args: Prisma.VisitanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload>[]
          }
          delete: {
            args: Prisma.VisitanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload>
          }
          update: {
            args: Prisma.VisitanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload>
          }
          deleteMany: {
            args: Prisma.VisitanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload>[]
          }
          upsert: {
            args: Prisma.VisitanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitantePayload>
          }
          aggregate: {
            args: Prisma.VisitanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitante>
          }
          groupBy: {
            args: Prisma.VisitanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitanteCountArgs<ExtArgs>
            result: $Utils.Optional<VisitanteCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    deporte?: DeporteOmit
    cancha?: CanchaOmit
    horario?: HorarioOmit
    visitante?: VisitanteOmit
    reserva?: ReservaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DeporteCountOutputType
   */

  export type DeporteCountOutputType = {
    canchas: number
  }

  export type DeporteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canchas?: boolean | DeporteCountOutputTypeCountCanchasArgs
  }

  // Custom InputTypes
  /**
   * DeporteCountOutputType without action
   */
  export type DeporteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeporteCountOutputType
     */
    select?: DeporteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeporteCountOutputType without action
   */
  export type DeporteCountOutputTypeCountCanchasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanchaWhereInput
  }


  /**
   * Count Type CanchaCountOutputType
   */

  export type CanchaCountOutputType = {
    horarios: number
  }

  export type CanchaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horarios?: boolean | CanchaCountOutputTypeCountHorariosArgs
  }

  // Custom InputTypes
  /**
   * CanchaCountOutputType without action
   */
  export type CanchaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanchaCountOutputType
     */
    select?: CanchaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CanchaCountOutputType without action
   */
  export type CanchaCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioWhereInput
  }


  /**
   * Count Type HorarioCountOutputType
   */

  export type HorarioCountOutputType = {
    reservas: number
  }

  export type HorarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | HorarioCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * HorarioCountOutputType without action
   */
  export type HorarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioCountOutputType
     */
    select?: HorarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HorarioCountOutputType without action
   */
  export type HorarioCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type VisitanteCountOutputType
   */

  export type VisitanteCountOutputType = {
    reservas: number
  }

  export type VisitanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | VisitanteCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * VisitanteCountOutputType without action
   */
  export type VisitanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitanteCountOutputType
     */
    select?: VisitanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitanteCountOutputType without action
   */
  export type VisitanteCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Deporte
   */

  export type AggregateDeporte = {
    _count: DeporteCountAggregateOutputType | null
    _avg: DeporteAvgAggregateOutputType | null
    _sum: DeporteSumAggregateOutputType | null
    _min: DeporteMinAggregateOutputType | null
    _max: DeporteMaxAggregateOutputType | null
  }

  export type DeporteAvgAggregateOutputType = {
    id: number | null
  }

  export type DeporteSumAggregateOutputType = {
    id: number | null
  }

  export type DeporteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeporteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeporteCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeporteAvgAggregateInputType = {
    id?: true
  }

  export type DeporteSumAggregateInputType = {
    id?: true
  }

  export type DeporteMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeporteMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeporteCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeporteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deporte to aggregate.
     */
    where?: DeporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deportes to fetch.
     */
    orderBy?: DeporteOrderByWithRelationInput | DeporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deportes
    **/
    _count?: true | DeporteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeporteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeporteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeporteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeporteMaxAggregateInputType
  }

  export type GetDeporteAggregateType<T extends DeporteAggregateArgs> = {
        [P in keyof T & keyof AggregateDeporte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeporte[P]>
      : GetScalarType<T[P], AggregateDeporte[P]>
  }




  export type DeporteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeporteWhereInput
    orderBy?: DeporteOrderByWithAggregationInput | DeporteOrderByWithAggregationInput[]
    by: DeporteScalarFieldEnum[] | DeporteScalarFieldEnum
    having?: DeporteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeporteCountAggregateInputType | true
    _avg?: DeporteAvgAggregateInputType
    _sum?: DeporteSumAggregateInputType
    _min?: DeporteMinAggregateInputType
    _max?: DeporteMaxAggregateInputType
  }

  export type DeporteGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    createdAt: Date
    updatedAt: Date
    _count: DeporteCountAggregateOutputType | null
    _avg: DeporteAvgAggregateOutputType | null
    _sum: DeporteSumAggregateOutputType | null
    _min: DeporteMinAggregateOutputType | null
    _max: DeporteMaxAggregateOutputType | null
  }

  type GetDeporteGroupByPayload<T extends DeporteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeporteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeporteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeporteGroupByOutputType[P]>
            : GetScalarType<T[P], DeporteGroupByOutputType[P]>
        }
      >
    >


  export type DeporteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canchas?: boolean | Deporte$canchasArgs<ExtArgs>
    _count?: boolean | DeporteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deporte"]>

  export type DeporteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deporte"]>

  export type DeporteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deporte"]>

  export type DeporteSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeporteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "createdAt" | "updatedAt", ExtArgs["result"]["deporte"]>
  export type DeporteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canchas?: boolean | Deporte$canchasArgs<ExtArgs>
    _count?: boolean | DeporteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeporteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeporteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeportePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deporte"
    objects: {
      canchas: Prisma.$CanchaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deporte"]>
    composites: {}
  }

  type DeporteGetPayload<S extends boolean | null | undefined | DeporteDefaultArgs> = $Result.GetResult<Prisma.$DeportePayload, S>

  type DeporteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeporteCountAggregateInputType | true
    }

  export interface DeporteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deporte'], meta: { name: 'Deporte' } }
    /**
     * Find zero or one Deporte that matches the filter.
     * @param {DeporteFindUniqueArgs} args - Arguments to find a Deporte
     * @example
     * // Get one Deporte
     * const deporte = await prisma.deporte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeporteFindUniqueArgs>(args: SelectSubset<T, DeporteFindUniqueArgs<ExtArgs>>): Prisma__DeporteClient<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deporte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeporteFindUniqueOrThrowArgs} args - Arguments to find a Deporte
     * @example
     * // Get one Deporte
     * const deporte = await prisma.deporte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeporteFindUniqueOrThrowArgs>(args: SelectSubset<T, DeporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeporteClient<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deporte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeporteFindFirstArgs} args - Arguments to find a Deporte
     * @example
     * // Get one Deporte
     * const deporte = await prisma.deporte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeporteFindFirstArgs>(args?: SelectSubset<T, DeporteFindFirstArgs<ExtArgs>>): Prisma__DeporteClient<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deporte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeporteFindFirstOrThrowArgs} args - Arguments to find a Deporte
     * @example
     * // Get one Deporte
     * const deporte = await prisma.deporte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeporteFindFirstOrThrowArgs>(args?: SelectSubset<T, DeporteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeporteClient<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deportes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeporteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deportes
     * const deportes = await prisma.deporte.findMany()
     * 
     * // Get first 10 Deportes
     * const deportes = await prisma.deporte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deporteWithIdOnly = await prisma.deporte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeporteFindManyArgs>(args?: SelectSubset<T, DeporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deporte.
     * @param {DeporteCreateArgs} args - Arguments to create a Deporte.
     * @example
     * // Create one Deporte
     * const Deporte = await prisma.deporte.create({
     *   data: {
     *     // ... data to create a Deporte
     *   }
     * })
     * 
     */
    create<T extends DeporteCreateArgs>(args: SelectSubset<T, DeporteCreateArgs<ExtArgs>>): Prisma__DeporteClient<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deportes.
     * @param {DeporteCreateManyArgs} args - Arguments to create many Deportes.
     * @example
     * // Create many Deportes
     * const deporte = await prisma.deporte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeporteCreateManyArgs>(args?: SelectSubset<T, DeporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deportes and returns the data saved in the database.
     * @param {DeporteCreateManyAndReturnArgs} args - Arguments to create many Deportes.
     * @example
     * // Create many Deportes
     * const deporte = await prisma.deporte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deportes and only return the `id`
     * const deporteWithIdOnly = await prisma.deporte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeporteCreateManyAndReturnArgs>(args?: SelectSubset<T, DeporteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deporte.
     * @param {DeporteDeleteArgs} args - Arguments to delete one Deporte.
     * @example
     * // Delete one Deporte
     * const Deporte = await prisma.deporte.delete({
     *   where: {
     *     // ... filter to delete one Deporte
     *   }
     * })
     * 
     */
    delete<T extends DeporteDeleteArgs>(args: SelectSubset<T, DeporteDeleteArgs<ExtArgs>>): Prisma__DeporteClient<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deporte.
     * @param {DeporteUpdateArgs} args - Arguments to update one Deporte.
     * @example
     * // Update one Deporte
     * const deporte = await prisma.deporte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeporteUpdateArgs>(args: SelectSubset<T, DeporteUpdateArgs<ExtArgs>>): Prisma__DeporteClient<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deportes.
     * @param {DeporteDeleteManyArgs} args - Arguments to filter Deportes to delete.
     * @example
     * // Delete a few Deportes
     * const { count } = await prisma.deporte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeporteDeleteManyArgs>(args?: SelectSubset<T, DeporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeporteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deportes
     * const deporte = await prisma.deporte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeporteUpdateManyArgs>(args: SelectSubset<T, DeporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deportes and returns the data updated in the database.
     * @param {DeporteUpdateManyAndReturnArgs} args - Arguments to update many Deportes.
     * @example
     * // Update many Deportes
     * const deporte = await prisma.deporte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deportes and only return the `id`
     * const deporteWithIdOnly = await prisma.deporte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeporteUpdateManyAndReturnArgs>(args: SelectSubset<T, DeporteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deporte.
     * @param {DeporteUpsertArgs} args - Arguments to update or create a Deporte.
     * @example
     * // Update or create a Deporte
     * const deporte = await prisma.deporte.upsert({
     *   create: {
     *     // ... data to create a Deporte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deporte we want to update
     *   }
     * })
     */
    upsert<T extends DeporteUpsertArgs>(args: SelectSubset<T, DeporteUpsertArgs<ExtArgs>>): Prisma__DeporteClient<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeporteCountArgs} args - Arguments to filter Deportes to count.
     * @example
     * // Count the number of Deportes
     * const count = await prisma.deporte.count({
     *   where: {
     *     // ... the filter for the Deportes we want to count
     *   }
     * })
    **/
    count<T extends DeporteCountArgs>(
      args?: Subset<T, DeporteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeporteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeporteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeporteAggregateArgs>(args: Subset<T, DeporteAggregateArgs>): Prisma.PrismaPromise<GetDeporteAggregateType<T>>

    /**
     * Group by Deporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeporteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeporteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeporteGroupByArgs['orderBy'] }
        : { orderBy?: DeporteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deporte model
   */
  readonly fields: DeporteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deporte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeporteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canchas<T extends Deporte$canchasArgs<ExtArgs> = {}>(args?: Subset<T, Deporte$canchasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deporte model
   */
  interface DeporteFieldRefs {
    readonly id: FieldRef<"Deporte", 'Int'>
    readonly nombre: FieldRef<"Deporte", 'String'>
    readonly descripcion: FieldRef<"Deporte", 'String'>
    readonly createdAt: FieldRef<"Deporte", 'DateTime'>
    readonly updatedAt: FieldRef<"Deporte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deporte findUnique
   */
  export type DeporteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
    /**
     * Filter, which Deporte to fetch.
     */
    where: DeporteWhereUniqueInput
  }

  /**
   * Deporte findUniqueOrThrow
   */
  export type DeporteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
    /**
     * Filter, which Deporte to fetch.
     */
    where: DeporteWhereUniqueInput
  }

  /**
   * Deporte findFirst
   */
  export type DeporteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
    /**
     * Filter, which Deporte to fetch.
     */
    where?: DeporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deportes to fetch.
     */
    orderBy?: DeporteOrderByWithRelationInput | DeporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deportes.
     */
    cursor?: DeporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deportes.
     */
    distinct?: DeporteScalarFieldEnum | DeporteScalarFieldEnum[]
  }

  /**
   * Deporte findFirstOrThrow
   */
  export type DeporteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
    /**
     * Filter, which Deporte to fetch.
     */
    where?: DeporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deportes to fetch.
     */
    orderBy?: DeporteOrderByWithRelationInput | DeporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deportes.
     */
    cursor?: DeporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deportes.
     */
    distinct?: DeporteScalarFieldEnum | DeporteScalarFieldEnum[]
  }

  /**
   * Deporte findMany
   */
  export type DeporteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
    /**
     * Filter, which Deportes to fetch.
     */
    where?: DeporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deportes to fetch.
     */
    orderBy?: DeporteOrderByWithRelationInput | DeporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deportes.
     */
    cursor?: DeporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deportes.
     */
    distinct?: DeporteScalarFieldEnum | DeporteScalarFieldEnum[]
  }

  /**
   * Deporte create
   */
  export type DeporteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
    /**
     * The data needed to create a Deporte.
     */
    data: XOR<DeporteCreateInput, DeporteUncheckedCreateInput>
  }

  /**
   * Deporte createMany
   */
  export type DeporteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deportes.
     */
    data: DeporteCreateManyInput | DeporteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deporte createManyAndReturn
   */
  export type DeporteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * The data used to create many Deportes.
     */
    data: DeporteCreateManyInput | DeporteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deporte update
   */
  export type DeporteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
    /**
     * The data needed to update a Deporte.
     */
    data: XOR<DeporteUpdateInput, DeporteUncheckedUpdateInput>
    /**
     * Choose, which Deporte to update.
     */
    where: DeporteWhereUniqueInput
  }

  /**
   * Deporte updateMany
   */
  export type DeporteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deportes.
     */
    data: XOR<DeporteUpdateManyMutationInput, DeporteUncheckedUpdateManyInput>
    /**
     * Filter which Deportes to update
     */
    where?: DeporteWhereInput
    /**
     * Limit how many Deportes to update.
     */
    limit?: number
  }

  /**
   * Deporte updateManyAndReturn
   */
  export type DeporteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * The data used to update Deportes.
     */
    data: XOR<DeporteUpdateManyMutationInput, DeporteUncheckedUpdateManyInput>
    /**
     * Filter which Deportes to update
     */
    where?: DeporteWhereInput
    /**
     * Limit how many Deportes to update.
     */
    limit?: number
  }

  /**
   * Deporte upsert
   */
  export type DeporteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
    /**
     * The filter to search for the Deporte to update in case it exists.
     */
    where: DeporteWhereUniqueInput
    /**
     * In case the Deporte found by the `where` argument doesn't exist, create a new Deporte with this data.
     */
    create: XOR<DeporteCreateInput, DeporteUncheckedCreateInput>
    /**
     * In case the Deporte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeporteUpdateInput, DeporteUncheckedUpdateInput>
  }

  /**
   * Deporte delete
   */
  export type DeporteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
    /**
     * Filter which Deporte to delete.
     */
    where: DeporteWhereUniqueInput
  }

  /**
   * Deporte deleteMany
   */
  export type DeporteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deportes to delete
     */
    where?: DeporteWhereInput
    /**
     * Limit how many Deportes to delete.
     */
    limit?: number
  }

  /**
   * Deporte.canchas
   */
  export type Deporte$canchasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    where?: CanchaWhereInput
    orderBy?: CanchaOrderByWithRelationInput | CanchaOrderByWithRelationInput[]
    cursor?: CanchaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CanchaScalarFieldEnum | CanchaScalarFieldEnum[]
  }

  /**
   * Deporte without action
   */
  export type DeporteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deporte
     */
    select?: DeporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deporte
     */
    omit?: DeporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeporteInclude<ExtArgs> | null
  }


  /**
   * Model Cancha
   */

  export type AggregateCancha = {
    _count: CanchaCountAggregateOutputType | null
    _avg: CanchaAvgAggregateOutputType | null
    _sum: CanchaSumAggregateOutputType | null
    _min: CanchaMinAggregateOutputType | null
    _max: CanchaMaxAggregateOutputType | null
  }

  export type CanchaAvgAggregateOutputType = {
    id: number | null
    capacidad: number | null
    deporteId: number | null
  }

  export type CanchaSumAggregateOutputType = {
    id: number | null
    capacidad: number | null
    deporteId: number | null
  }

  export type CanchaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    ubicacion: string | null
    capacidad: number | null
    estado: boolean | null
    deporteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CanchaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    ubicacion: string | null
    capacidad: number | null
    estado: boolean | null
    deporteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CanchaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    ubicacion: number
    capacidad: number
    estado: number
    deporteId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CanchaAvgAggregateInputType = {
    id?: true
    capacidad?: true
    deporteId?: true
  }

  export type CanchaSumAggregateInputType = {
    id?: true
    capacidad?: true
    deporteId?: true
  }

  export type CanchaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    ubicacion?: true
    capacidad?: true
    estado?: true
    deporteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CanchaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    ubicacion?: true
    capacidad?: true
    estado?: true
    deporteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CanchaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    ubicacion?: true
    capacidad?: true
    estado?: true
    deporteId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CanchaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cancha to aggregate.
     */
    where?: CanchaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Canchas to fetch.
     */
    orderBy?: CanchaOrderByWithRelationInput | CanchaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CanchaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Canchas
    **/
    _count?: true | CanchaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CanchaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CanchaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CanchaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CanchaMaxAggregateInputType
  }

  export type GetCanchaAggregateType<T extends CanchaAggregateArgs> = {
        [P in keyof T & keyof AggregateCancha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCancha[P]>
      : GetScalarType<T[P], AggregateCancha[P]>
  }




  export type CanchaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanchaWhereInput
    orderBy?: CanchaOrderByWithAggregationInput | CanchaOrderByWithAggregationInput[]
    by: CanchaScalarFieldEnum[] | CanchaScalarFieldEnum
    having?: CanchaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CanchaCountAggregateInputType | true
    _avg?: CanchaAvgAggregateInputType
    _sum?: CanchaSumAggregateInputType
    _min?: CanchaMinAggregateInputType
    _max?: CanchaMaxAggregateInputType
  }

  export type CanchaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    ubicacion: string
    capacidad: number
    estado: boolean
    deporteId: number
    createdAt: Date
    updatedAt: Date
    _count: CanchaCountAggregateOutputType | null
    _avg: CanchaAvgAggregateOutputType | null
    _sum: CanchaSumAggregateOutputType | null
    _min: CanchaMinAggregateOutputType | null
    _max: CanchaMaxAggregateOutputType | null
  }

  type GetCanchaGroupByPayload<T extends CanchaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CanchaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CanchaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CanchaGroupByOutputType[P]>
            : GetScalarType<T[P], CanchaGroupByOutputType[P]>
        }
      >
    >


  export type CanchaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ubicacion?: boolean
    capacidad?: boolean
    estado?: boolean
    deporteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deporte?: boolean | DeporteDefaultArgs<ExtArgs>
    horarios?: boolean | Cancha$horariosArgs<ExtArgs>
    _count?: boolean | CanchaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancha"]>

  export type CanchaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ubicacion?: boolean
    capacidad?: boolean
    estado?: boolean
    deporteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deporte?: boolean | DeporteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancha"]>

  export type CanchaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ubicacion?: boolean
    capacidad?: boolean
    estado?: boolean
    deporteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deporte?: boolean | DeporteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancha"]>

  export type CanchaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ubicacion?: boolean
    capacidad?: boolean
    estado?: boolean
    deporteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CanchaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "ubicacion" | "capacidad" | "estado" | "deporteId" | "createdAt" | "updatedAt", ExtArgs["result"]["cancha"]>
  export type CanchaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deporte?: boolean | DeporteDefaultArgs<ExtArgs>
    horarios?: boolean | Cancha$horariosArgs<ExtArgs>
    _count?: boolean | CanchaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CanchaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deporte?: boolean | DeporteDefaultArgs<ExtArgs>
  }
  export type CanchaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deporte?: boolean | DeporteDefaultArgs<ExtArgs>
  }

  export type $CanchaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cancha"
    objects: {
      deporte: Prisma.$DeportePayload<ExtArgs>
      horarios: Prisma.$HorarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      ubicacion: string
      capacidad: number
      estado: boolean
      deporteId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cancha"]>
    composites: {}
  }

  type CanchaGetPayload<S extends boolean | null | undefined | CanchaDefaultArgs> = $Result.GetResult<Prisma.$CanchaPayload, S>

  type CanchaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CanchaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CanchaCountAggregateInputType | true
    }

  export interface CanchaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cancha'], meta: { name: 'Cancha' } }
    /**
     * Find zero or one Cancha that matches the filter.
     * @param {CanchaFindUniqueArgs} args - Arguments to find a Cancha
     * @example
     * // Get one Cancha
     * const cancha = await prisma.cancha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CanchaFindUniqueArgs>(args: SelectSubset<T, CanchaFindUniqueArgs<ExtArgs>>): Prisma__CanchaClient<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cancha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CanchaFindUniqueOrThrowArgs} args - Arguments to find a Cancha
     * @example
     * // Get one Cancha
     * const cancha = await prisma.cancha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CanchaFindUniqueOrThrowArgs>(args: SelectSubset<T, CanchaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CanchaClient<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cancha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanchaFindFirstArgs} args - Arguments to find a Cancha
     * @example
     * // Get one Cancha
     * const cancha = await prisma.cancha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CanchaFindFirstArgs>(args?: SelectSubset<T, CanchaFindFirstArgs<ExtArgs>>): Prisma__CanchaClient<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cancha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanchaFindFirstOrThrowArgs} args - Arguments to find a Cancha
     * @example
     * // Get one Cancha
     * const cancha = await prisma.cancha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CanchaFindFirstOrThrowArgs>(args?: SelectSubset<T, CanchaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CanchaClient<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Canchas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanchaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Canchas
     * const canchas = await prisma.cancha.findMany()
     * 
     * // Get first 10 Canchas
     * const canchas = await prisma.cancha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const canchaWithIdOnly = await prisma.cancha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CanchaFindManyArgs>(args?: SelectSubset<T, CanchaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cancha.
     * @param {CanchaCreateArgs} args - Arguments to create a Cancha.
     * @example
     * // Create one Cancha
     * const Cancha = await prisma.cancha.create({
     *   data: {
     *     // ... data to create a Cancha
     *   }
     * })
     * 
     */
    create<T extends CanchaCreateArgs>(args: SelectSubset<T, CanchaCreateArgs<ExtArgs>>): Prisma__CanchaClient<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Canchas.
     * @param {CanchaCreateManyArgs} args - Arguments to create many Canchas.
     * @example
     * // Create many Canchas
     * const cancha = await prisma.cancha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CanchaCreateManyArgs>(args?: SelectSubset<T, CanchaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Canchas and returns the data saved in the database.
     * @param {CanchaCreateManyAndReturnArgs} args - Arguments to create many Canchas.
     * @example
     * // Create many Canchas
     * const cancha = await prisma.cancha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Canchas and only return the `id`
     * const canchaWithIdOnly = await prisma.cancha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CanchaCreateManyAndReturnArgs>(args?: SelectSubset<T, CanchaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cancha.
     * @param {CanchaDeleteArgs} args - Arguments to delete one Cancha.
     * @example
     * // Delete one Cancha
     * const Cancha = await prisma.cancha.delete({
     *   where: {
     *     // ... filter to delete one Cancha
     *   }
     * })
     * 
     */
    delete<T extends CanchaDeleteArgs>(args: SelectSubset<T, CanchaDeleteArgs<ExtArgs>>): Prisma__CanchaClient<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cancha.
     * @param {CanchaUpdateArgs} args - Arguments to update one Cancha.
     * @example
     * // Update one Cancha
     * const cancha = await prisma.cancha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CanchaUpdateArgs>(args: SelectSubset<T, CanchaUpdateArgs<ExtArgs>>): Prisma__CanchaClient<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Canchas.
     * @param {CanchaDeleteManyArgs} args - Arguments to filter Canchas to delete.
     * @example
     * // Delete a few Canchas
     * const { count } = await prisma.cancha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CanchaDeleteManyArgs>(args?: SelectSubset<T, CanchaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Canchas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanchaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Canchas
     * const cancha = await prisma.cancha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CanchaUpdateManyArgs>(args: SelectSubset<T, CanchaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Canchas and returns the data updated in the database.
     * @param {CanchaUpdateManyAndReturnArgs} args - Arguments to update many Canchas.
     * @example
     * // Update many Canchas
     * const cancha = await prisma.cancha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Canchas and only return the `id`
     * const canchaWithIdOnly = await prisma.cancha.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CanchaUpdateManyAndReturnArgs>(args: SelectSubset<T, CanchaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cancha.
     * @param {CanchaUpsertArgs} args - Arguments to update or create a Cancha.
     * @example
     * // Update or create a Cancha
     * const cancha = await prisma.cancha.upsert({
     *   create: {
     *     // ... data to create a Cancha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cancha we want to update
     *   }
     * })
     */
    upsert<T extends CanchaUpsertArgs>(args: SelectSubset<T, CanchaUpsertArgs<ExtArgs>>): Prisma__CanchaClient<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Canchas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanchaCountArgs} args - Arguments to filter Canchas to count.
     * @example
     * // Count the number of Canchas
     * const count = await prisma.cancha.count({
     *   where: {
     *     // ... the filter for the Canchas we want to count
     *   }
     * })
    **/
    count<T extends CanchaCountArgs>(
      args?: Subset<T, CanchaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CanchaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cancha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanchaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CanchaAggregateArgs>(args: Subset<T, CanchaAggregateArgs>): Prisma.PrismaPromise<GetCanchaAggregateType<T>>

    /**
     * Group by Cancha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanchaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CanchaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CanchaGroupByArgs['orderBy'] }
        : { orderBy?: CanchaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CanchaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanchaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cancha model
   */
  readonly fields: CanchaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cancha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CanchaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deporte<T extends DeporteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeporteDefaultArgs<ExtArgs>>): Prisma__DeporteClient<$Result.GetResult<Prisma.$DeportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    horarios<T extends Cancha$horariosArgs<ExtArgs> = {}>(args?: Subset<T, Cancha$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cancha model
   */
  interface CanchaFieldRefs {
    readonly id: FieldRef<"Cancha", 'Int'>
    readonly nombre: FieldRef<"Cancha", 'String'>
    readonly descripcion: FieldRef<"Cancha", 'String'>
    readonly ubicacion: FieldRef<"Cancha", 'String'>
    readonly capacidad: FieldRef<"Cancha", 'Int'>
    readonly estado: FieldRef<"Cancha", 'Boolean'>
    readonly deporteId: FieldRef<"Cancha", 'Int'>
    readonly createdAt: FieldRef<"Cancha", 'DateTime'>
    readonly updatedAt: FieldRef<"Cancha", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cancha findUnique
   */
  export type CanchaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    /**
     * Filter, which Cancha to fetch.
     */
    where: CanchaWhereUniqueInput
  }

  /**
   * Cancha findUniqueOrThrow
   */
  export type CanchaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    /**
     * Filter, which Cancha to fetch.
     */
    where: CanchaWhereUniqueInput
  }

  /**
   * Cancha findFirst
   */
  export type CanchaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    /**
     * Filter, which Cancha to fetch.
     */
    where?: CanchaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Canchas to fetch.
     */
    orderBy?: CanchaOrderByWithRelationInput | CanchaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Canchas.
     */
    cursor?: CanchaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Canchas.
     */
    distinct?: CanchaScalarFieldEnum | CanchaScalarFieldEnum[]
  }

  /**
   * Cancha findFirstOrThrow
   */
  export type CanchaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    /**
     * Filter, which Cancha to fetch.
     */
    where?: CanchaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Canchas to fetch.
     */
    orderBy?: CanchaOrderByWithRelationInput | CanchaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Canchas.
     */
    cursor?: CanchaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Canchas.
     */
    distinct?: CanchaScalarFieldEnum | CanchaScalarFieldEnum[]
  }

  /**
   * Cancha findMany
   */
  export type CanchaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    /**
     * Filter, which Canchas to fetch.
     */
    where?: CanchaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Canchas to fetch.
     */
    orderBy?: CanchaOrderByWithRelationInput | CanchaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Canchas.
     */
    cursor?: CanchaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Canchas.
     */
    distinct?: CanchaScalarFieldEnum | CanchaScalarFieldEnum[]
  }

  /**
   * Cancha create
   */
  export type CanchaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cancha.
     */
    data: XOR<CanchaCreateInput, CanchaUncheckedCreateInput>
  }

  /**
   * Cancha createMany
   */
  export type CanchaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Canchas.
     */
    data: CanchaCreateManyInput | CanchaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cancha createManyAndReturn
   */
  export type CanchaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * The data used to create many Canchas.
     */
    data: CanchaCreateManyInput | CanchaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cancha update
   */
  export type CanchaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cancha.
     */
    data: XOR<CanchaUpdateInput, CanchaUncheckedUpdateInput>
    /**
     * Choose, which Cancha to update.
     */
    where: CanchaWhereUniqueInput
  }

  /**
   * Cancha updateMany
   */
  export type CanchaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Canchas.
     */
    data: XOR<CanchaUpdateManyMutationInput, CanchaUncheckedUpdateManyInput>
    /**
     * Filter which Canchas to update
     */
    where?: CanchaWhereInput
    /**
     * Limit how many Canchas to update.
     */
    limit?: number
  }

  /**
   * Cancha updateManyAndReturn
   */
  export type CanchaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * The data used to update Canchas.
     */
    data: XOR<CanchaUpdateManyMutationInput, CanchaUncheckedUpdateManyInput>
    /**
     * Filter which Canchas to update
     */
    where?: CanchaWhereInput
    /**
     * Limit how many Canchas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cancha upsert
   */
  export type CanchaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cancha to update in case it exists.
     */
    where: CanchaWhereUniqueInput
    /**
     * In case the Cancha found by the `where` argument doesn't exist, create a new Cancha with this data.
     */
    create: XOR<CanchaCreateInput, CanchaUncheckedCreateInput>
    /**
     * In case the Cancha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CanchaUpdateInput, CanchaUncheckedUpdateInput>
  }

  /**
   * Cancha delete
   */
  export type CanchaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
    /**
     * Filter which Cancha to delete.
     */
    where: CanchaWhereUniqueInput
  }

  /**
   * Cancha deleteMany
   */
  export type CanchaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Canchas to delete
     */
    where?: CanchaWhereInput
    /**
     * Limit how many Canchas to delete.
     */
    limit?: number
  }

  /**
   * Cancha.horarios
   */
  export type Cancha$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    where?: HorarioWhereInput
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    cursor?: HorarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Cancha without action
   */
  export type CanchaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancha
     */
    select?: CanchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancha
     */
    omit?: CanchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanchaInclude<ExtArgs> | null
  }


  /**
   * Model Horario
   */

  export type AggregateHorario = {
    _count: HorarioCountAggregateOutputType | null
    _avg: HorarioAvgAggregateOutputType | null
    _sum: HorarioSumAggregateOutputType | null
    _min: HorarioMinAggregateOutputType | null
    _max: HorarioMaxAggregateOutputType | null
  }

  export type HorarioAvgAggregateOutputType = {
    id: number | null
    canchaId: number | null
  }

  export type HorarioSumAggregateOutputType = {
    id: number | null
    canchaId: number | null
  }

  export type HorarioMinAggregateOutputType = {
    id: number | null
    canchaId: number | null
    diaSemana: string | null
    horaInicio: string | null
    horaFin: string | null
    disponible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorarioMaxAggregateOutputType = {
    id: number | null
    canchaId: number | null
    diaSemana: string | null
    horaInicio: string | null
    horaFin: string | null
    disponible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorarioCountAggregateOutputType = {
    id: number
    canchaId: number
    diaSemana: number
    horaInicio: number
    horaFin: number
    disponible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HorarioAvgAggregateInputType = {
    id?: true
    canchaId?: true
  }

  export type HorarioSumAggregateInputType = {
    id?: true
    canchaId?: true
  }

  export type HorarioMinAggregateInputType = {
    id?: true
    canchaId?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    disponible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorarioMaxAggregateInputType = {
    id?: true
    canchaId?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    disponible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorarioCountAggregateInputType = {
    id?: true
    canchaId?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    disponible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HorarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horario to aggregate.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Horarios
    **/
    _count?: true | HorarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioMaxAggregateInputType
  }

  export type GetHorarioAggregateType<T extends HorarioAggregateArgs> = {
        [P in keyof T & keyof AggregateHorario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorario[P]>
      : GetScalarType<T[P], AggregateHorario[P]>
  }




  export type HorarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioWhereInput
    orderBy?: HorarioOrderByWithAggregationInput | HorarioOrderByWithAggregationInput[]
    by: HorarioScalarFieldEnum[] | HorarioScalarFieldEnum
    having?: HorarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioCountAggregateInputType | true
    _avg?: HorarioAvgAggregateInputType
    _sum?: HorarioSumAggregateInputType
    _min?: HorarioMinAggregateInputType
    _max?: HorarioMaxAggregateInputType
  }

  export type HorarioGroupByOutputType = {
    id: number
    canchaId: number
    diaSemana: string
    horaInicio: string
    horaFin: string
    disponible: boolean
    createdAt: Date
    updatedAt: Date
    _count: HorarioCountAggregateOutputType | null
    _avg: HorarioAvgAggregateOutputType | null
    _sum: HorarioSumAggregateOutputType | null
    _min: HorarioMinAggregateOutputType | null
    _max: HorarioMaxAggregateOutputType | null
  }

  type GetHorarioGroupByPayload<T extends HorarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioGroupByOutputType[P]>
        }
      >
    >


  export type HorarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canchaId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    disponible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cancha?: boolean | CanchaDefaultArgs<ExtArgs>
    reservas?: boolean | Horario$reservasArgs<ExtArgs>
    _count?: boolean | HorarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horario"]>

  export type HorarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canchaId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    disponible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cancha?: boolean | CanchaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horario"]>

  export type HorarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canchaId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    disponible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cancha?: boolean | CanchaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horario"]>

  export type HorarioSelectScalar = {
    id?: boolean
    canchaId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    disponible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HorarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "canchaId" | "diaSemana" | "horaInicio" | "horaFin" | "disponible" | "createdAt" | "updatedAt", ExtArgs["result"]["horario"]>
  export type HorarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cancha?: boolean | CanchaDefaultArgs<ExtArgs>
    reservas?: boolean | Horario$reservasArgs<ExtArgs>
    _count?: boolean | HorarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HorarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cancha?: boolean | CanchaDefaultArgs<ExtArgs>
  }
  export type HorarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cancha?: boolean | CanchaDefaultArgs<ExtArgs>
  }

  export type $HorarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Horario"
    objects: {
      cancha: Prisma.$CanchaPayload<ExtArgs>
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      canchaId: number
      diaSemana: string
      horaInicio: string
      horaFin: string
      disponible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["horario"]>
    composites: {}
  }

  type HorarioGetPayload<S extends boolean | null | undefined | HorarioDefaultArgs> = $Result.GetResult<Prisma.$HorarioPayload, S>

  type HorarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorarioCountAggregateInputType | true
    }

  export interface HorarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Horario'], meta: { name: 'Horario' } }
    /**
     * Find zero or one Horario that matches the filter.
     * @param {HorarioFindUniqueArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioFindUniqueArgs>(args: SelectSubset<T, HorarioFindUniqueArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorarioFindUniqueOrThrowArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioFindUniqueOrThrowArgs>(args: SelectSubset<T, HorarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioFindFirstArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioFindFirstArgs>(args?: SelectSubset<T, HorarioFindFirstArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioFindFirstOrThrowArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioFindFirstOrThrowArgs>(args?: SelectSubset<T, HorarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios
     * const horarios = await prisma.horario.findMany()
     * 
     * // Get first 10 Horarios
     * const horarios = await prisma.horario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horarioWithIdOnly = await prisma.horario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorarioFindManyArgs>(args?: SelectSubset<T, HorarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horario.
     * @param {HorarioCreateArgs} args - Arguments to create a Horario.
     * @example
     * // Create one Horario
     * const Horario = await prisma.horario.create({
     *   data: {
     *     // ... data to create a Horario
     *   }
     * })
     * 
     */
    create<T extends HorarioCreateArgs>(args: SelectSubset<T, HorarioCreateArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horarios.
     * @param {HorarioCreateManyArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horario = await prisma.horario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorarioCreateManyArgs>(args?: SelectSubset<T, HorarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Horarios and returns the data saved in the database.
     * @param {HorarioCreateManyAndReturnArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horario = await prisma.horario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Horarios and only return the `id`
     * const horarioWithIdOnly = await prisma.horario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorarioCreateManyAndReturnArgs>(args?: SelectSubset<T, HorarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Horario.
     * @param {HorarioDeleteArgs} args - Arguments to delete one Horario.
     * @example
     * // Delete one Horario
     * const Horario = await prisma.horario.delete({
     *   where: {
     *     // ... filter to delete one Horario
     *   }
     * })
     * 
     */
    delete<T extends HorarioDeleteArgs>(args: SelectSubset<T, HorarioDeleteArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horario.
     * @param {HorarioUpdateArgs} args - Arguments to update one Horario.
     * @example
     * // Update one Horario
     * const horario = await prisma.horario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorarioUpdateArgs>(args: SelectSubset<T, HorarioUpdateArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horarios.
     * @param {HorarioDeleteManyArgs} args - Arguments to filter Horarios to delete.
     * @example
     * // Delete a few Horarios
     * const { count } = await prisma.horario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorarioDeleteManyArgs>(args?: SelectSubset<T, HorarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios
     * const horario = await prisma.horario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorarioUpdateManyArgs>(args: SelectSubset<T, HorarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios and returns the data updated in the database.
     * @param {HorarioUpdateManyAndReturnArgs} args - Arguments to update many Horarios.
     * @example
     * // Update many Horarios
     * const horario = await prisma.horario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Horarios and only return the `id`
     * const horarioWithIdOnly = await prisma.horario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HorarioUpdateManyAndReturnArgs>(args: SelectSubset<T, HorarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Horario.
     * @param {HorarioUpsertArgs} args - Arguments to update or create a Horario.
     * @example
     * // Update or create a Horario
     * const horario = await prisma.horario.upsert({
     *   create: {
     *     // ... data to create a Horario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horario we want to update
     *   }
     * })
     */
    upsert<T extends HorarioUpsertArgs>(args: SelectSubset<T, HorarioUpsertArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioCountArgs} args - Arguments to filter Horarios to count.
     * @example
     * // Count the number of Horarios
     * const count = await prisma.horario.count({
     *   where: {
     *     // ... the filter for the Horarios we want to count
     *   }
     * })
    **/
    count<T extends HorarioCountArgs>(
      args?: Subset<T, HorarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorarioAggregateArgs>(args: Subset<T, HorarioAggregateArgs>): Prisma.PrismaPromise<GetHorarioAggregateType<T>>

    /**
     * Group by Horario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorarioGroupByArgs['orderBy'] }
        : { orderBy?: HorarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Horario model
   */
  readonly fields: HorarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Horario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cancha<T extends CanchaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CanchaDefaultArgs<ExtArgs>>): Prisma__CanchaClient<$Result.GetResult<Prisma.$CanchaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservas<T extends Horario$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Horario$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Horario model
   */
  interface HorarioFieldRefs {
    readonly id: FieldRef<"Horario", 'Int'>
    readonly canchaId: FieldRef<"Horario", 'Int'>
    readonly diaSemana: FieldRef<"Horario", 'String'>
    readonly horaInicio: FieldRef<"Horario", 'String'>
    readonly horaFin: FieldRef<"Horario", 'String'>
    readonly disponible: FieldRef<"Horario", 'Boolean'>
    readonly createdAt: FieldRef<"Horario", 'DateTime'>
    readonly updatedAt: FieldRef<"Horario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Horario findUnique
   */
  export type HorarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario findUniqueOrThrow
   */
  export type HorarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario findFirst
   */
  export type HorarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horarios.
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horarios.
     */
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Horario findFirstOrThrow
   */
  export type HorarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horario to fetch.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horarios.
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horarios.
     */
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Horario findMany
   */
  export type HorarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter, which Horarios to fetch.
     */
    where?: HorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorarioOrderByWithRelationInput | HorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Horarios.
     */
    cursor?: HorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horarios.
     */
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * Horario create
   */
  export type HorarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Horario.
     */
    data: XOR<HorarioCreateInput, HorarioUncheckedCreateInput>
  }

  /**
   * Horario createMany
   */
  export type HorarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Horarios.
     */
    data: HorarioCreateManyInput | HorarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Horario createManyAndReturn
   */
  export type HorarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * The data used to create many Horarios.
     */
    data: HorarioCreateManyInput | HorarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Horario update
   */
  export type HorarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Horario.
     */
    data: XOR<HorarioUpdateInput, HorarioUncheckedUpdateInput>
    /**
     * Choose, which Horario to update.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario updateMany
   */
  export type HorarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Horarios.
     */
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyInput>
    /**
     * Filter which Horarios to update
     */
    where?: HorarioWhereInput
    /**
     * Limit how many Horarios to update.
     */
    limit?: number
  }

  /**
   * Horario updateManyAndReturn
   */
  export type HorarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * The data used to update Horarios.
     */
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyInput>
    /**
     * Filter which Horarios to update
     */
    where?: HorarioWhereInput
    /**
     * Limit how many Horarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Horario upsert
   */
  export type HorarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Horario to update in case it exists.
     */
    where: HorarioWhereUniqueInput
    /**
     * In case the Horario found by the `where` argument doesn't exist, create a new Horario with this data.
     */
    create: XOR<HorarioCreateInput, HorarioUncheckedCreateInput>
    /**
     * In case the Horario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorarioUpdateInput, HorarioUncheckedUpdateInput>
  }

  /**
   * Horario delete
   */
  export type HorarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
    /**
     * Filter which Horario to delete.
     */
    where: HorarioWhereUniqueInput
  }

  /**
   * Horario deleteMany
   */
  export type HorarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horarios to delete
     */
    where?: HorarioWhereInput
    /**
     * Limit how many Horarios to delete.
     */
    limit?: number
  }

  /**
   * Horario.reservas
   */
  export type Horario$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Horario without action
   */
  export type HorarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horario
     */
    select?: HorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horario
     */
    omit?: HorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioInclude<ExtArgs> | null
  }


  /**
   * Model Visitante
   */

  export type AggregateVisitante = {
    _count: VisitanteCountAggregateOutputType | null
    _avg: VisitanteAvgAggregateOutputType | null
    _sum: VisitanteSumAggregateOutputType | null
    _min: VisitanteMinAggregateOutputType | null
    _max: VisitanteMaxAggregateOutputType | null
  }

  export type VisitanteAvgAggregateOutputType = {
    id: number | null
  }

  export type VisitanteSumAggregateOutputType = {
    id: number | null
  }

  export type VisitanteMinAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitanteMaxAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitanteCountAggregateOutputType = {
    id: number
    nombres: number
    apellidos: number
    correo: number
    telefono: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitanteAvgAggregateInputType = {
    id?: true
  }

  export type VisitanteSumAggregateInputType = {
    id?: true
  }

  export type VisitanteMinAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitanteMaxAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitanteCountAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitante to aggregate.
     */
    where?: VisitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitantes to fetch.
     */
    orderBy?: VisitanteOrderByWithRelationInput | VisitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitantes
    **/
    _count?: true | VisitanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitanteMaxAggregateInputType
  }

  export type GetVisitanteAggregateType<T extends VisitanteAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitante[P]>
      : GetScalarType<T[P], AggregateVisitante[P]>
  }




  export type VisitanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitanteWhereInput
    orderBy?: VisitanteOrderByWithAggregationInput | VisitanteOrderByWithAggregationInput[]
    by: VisitanteScalarFieldEnum[] | VisitanteScalarFieldEnum
    having?: VisitanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitanteCountAggregateInputType | true
    _avg?: VisitanteAvgAggregateInputType
    _sum?: VisitanteSumAggregateInputType
    _min?: VisitanteMinAggregateInputType
    _max?: VisitanteMaxAggregateInputType
  }

  export type VisitanteGroupByOutputType = {
    id: number
    nombres: string
    apellidos: string
    correo: string
    telefono: string | null
    createdAt: Date
    updatedAt: Date
    _count: VisitanteCountAggregateOutputType | null
    _avg: VisitanteAvgAggregateOutputType | null
    _sum: VisitanteSumAggregateOutputType | null
    _min: VisitanteMinAggregateOutputType | null
    _max: VisitanteMaxAggregateOutputType | null
  }

  type GetVisitanteGroupByPayload<T extends VisitanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitanteGroupByOutputType[P]>
            : GetScalarType<T[P], VisitanteGroupByOutputType[P]>
        }
      >
    >


  export type VisitanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservas?: boolean | Visitante$reservasArgs<ExtArgs>
    _count?: boolean | VisitanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitante"]>

  export type VisitanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["visitante"]>

  export type VisitanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["visitante"]>

  export type VisitanteSelectScalar = {
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisitanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombres" | "apellidos" | "correo" | "telefono" | "createdAt" | "updatedAt", ExtArgs["result"]["visitante"]>
  export type VisitanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Visitante$reservasArgs<ExtArgs>
    _count?: boolean | VisitanteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VisitanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VisitantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitante"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombres: string
      apellidos: string
      correo: string
      telefono: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visitante"]>
    composites: {}
  }

  type VisitanteGetPayload<S extends boolean | null | undefined | VisitanteDefaultArgs> = $Result.GetResult<Prisma.$VisitantePayload, S>

  type VisitanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitanteCountAggregateInputType | true
    }

  export interface VisitanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitante'], meta: { name: 'Visitante' } }
    /**
     * Find zero or one Visitante that matches the filter.
     * @param {VisitanteFindUniqueArgs} args - Arguments to find a Visitante
     * @example
     * // Get one Visitante
     * const visitante = await prisma.visitante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitanteFindUniqueArgs>(args: SelectSubset<T, VisitanteFindUniqueArgs<ExtArgs>>): Prisma__VisitanteClient<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitanteFindUniqueOrThrowArgs} args - Arguments to find a Visitante
     * @example
     * // Get one Visitante
     * const visitante = await prisma.visitante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitanteFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitanteClient<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitanteFindFirstArgs} args - Arguments to find a Visitante
     * @example
     * // Get one Visitante
     * const visitante = await prisma.visitante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitanteFindFirstArgs>(args?: SelectSubset<T, VisitanteFindFirstArgs<ExtArgs>>): Prisma__VisitanteClient<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitanteFindFirstOrThrowArgs} args - Arguments to find a Visitante
     * @example
     * // Get one Visitante
     * const visitante = await prisma.visitante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitanteFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitanteClient<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitantes
     * const visitantes = await prisma.visitante.findMany()
     * 
     * // Get first 10 Visitantes
     * const visitantes = await prisma.visitante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitanteWithIdOnly = await prisma.visitante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitanteFindManyArgs>(args?: SelectSubset<T, VisitanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitante.
     * @param {VisitanteCreateArgs} args - Arguments to create a Visitante.
     * @example
     * // Create one Visitante
     * const Visitante = await prisma.visitante.create({
     *   data: {
     *     // ... data to create a Visitante
     *   }
     * })
     * 
     */
    create<T extends VisitanteCreateArgs>(args: SelectSubset<T, VisitanteCreateArgs<ExtArgs>>): Prisma__VisitanteClient<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitantes.
     * @param {VisitanteCreateManyArgs} args - Arguments to create many Visitantes.
     * @example
     * // Create many Visitantes
     * const visitante = await prisma.visitante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitanteCreateManyArgs>(args?: SelectSubset<T, VisitanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitantes and returns the data saved in the database.
     * @param {VisitanteCreateManyAndReturnArgs} args - Arguments to create many Visitantes.
     * @example
     * // Create many Visitantes
     * const visitante = await prisma.visitante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitantes and only return the `id`
     * const visitanteWithIdOnly = await prisma.visitante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitanteCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitante.
     * @param {VisitanteDeleteArgs} args - Arguments to delete one Visitante.
     * @example
     * // Delete one Visitante
     * const Visitante = await prisma.visitante.delete({
     *   where: {
     *     // ... filter to delete one Visitante
     *   }
     * })
     * 
     */
    delete<T extends VisitanteDeleteArgs>(args: SelectSubset<T, VisitanteDeleteArgs<ExtArgs>>): Prisma__VisitanteClient<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitante.
     * @param {VisitanteUpdateArgs} args - Arguments to update one Visitante.
     * @example
     * // Update one Visitante
     * const visitante = await prisma.visitante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitanteUpdateArgs>(args: SelectSubset<T, VisitanteUpdateArgs<ExtArgs>>): Prisma__VisitanteClient<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitantes.
     * @param {VisitanteDeleteManyArgs} args - Arguments to filter Visitantes to delete.
     * @example
     * // Delete a few Visitantes
     * const { count } = await prisma.visitante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitanteDeleteManyArgs>(args?: SelectSubset<T, VisitanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitantes
     * const visitante = await prisma.visitante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitanteUpdateManyArgs>(args: SelectSubset<T, VisitanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitantes and returns the data updated in the database.
     * @param {VisitanteUpdateManyAndReturnArgs} args - Arguments to update many Visitantes.
     * @example
     * // Update many Visitantes
     * const visitante = await prisma.visitante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitantes and only return the `id`
     * const visitanteWithIdOnly = await prisma.visitante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitanteUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitante.
     * @param {VisitanteUpsertArgs} args - Arguments to update or create a Visitante.
     * @example
     * // Update or create a Visitante
     * const visitante = await prisma.visitante.upsert({
     *   create: {
     *     // ... data to create a Visitante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitante we want to update
     *   }
     * })
     */
    upsert<T extends VisitanteUpsertArgs>(args: SelectSubset<T, VisitanteUpsertArgs<ExtArgs>>): Prisma__VisitanteClient<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitanteCountArgs} args - Arguments to filter Visitantes to count.
     * @example
     * // Count the number of Visitantes
     * const count = await prisma.visitante.count({
     *   where: {
     *     // ... the filter for the Visitantes we want to count
     *   }
     * })
    **/
    count<T extends VisitanteCountArgs>(
      args?: Subset<T, VisitanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitanteAggregateArgs>(args: Subset<T, VisitanteAggregateArgs>): Prisma.PrismaPromise<GetVisitanteAggregateType<T>>

    /**
     * Group by Visitante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitanteGroupByArgs['orderBy'] }
        : { orderBy?: VisitanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitante model
   */
  readonly fields: VisitanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Visitante$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Visitante$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visitante model
   */
  interface VisitanteFieldRefs {
    readonly id: FieldRef<"Visitante", 'Int'>
    readonly nombres: FieldRef<"Visitante", 'String'>
    readonly apellidos: FieldRef<"Visitante", 'String'>
    readonly correo: FieldRef<"Visitante", 'String'>
    readonly telefono: FieldRef<"Visitante", 'String'>
    readonly createdAt: FieldRef<"Visitante", 'DateTime'>
    readonly updatedAt: FieldRef<"Visitante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visitante findUnique
   */
  export type VisitanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
    /**
     * Filter, which Visitante to fetch.
     */
    where: VisitanteWhereUniqueInput
  }

  /**
   * Visitante findUniqueOrThrow
   */
  export type VisitanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
    /**
     * Filter, which Visitante to fetch.
     */
    where: VisitanteWhereUniqueInput
  }

  /**
   * Visitante findFirst
   */
  export type VisitanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
    /**
     * Filter, which Visitante to fetch.
     */
    where?: VisitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitantes to fetch.
     */
    orderBy?: VisitanteOrderByWithRelationInput | VisitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitantes.
     */
    cursor?: VisitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitantes.
     */
    distinct?: VisitanteScalarFieldEnum | VisitanteScalarFieldEnum[]
  }

  /**
   * Visitante findFirstOrThrow
   */
  export type VisitanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
    /**
     * Filter, which Visitante to fetch.
     */
    where?: VisitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitantes to fetch.
     */
    orderBy?: VisitanteOrderByWithRelationInput | VisitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitantes.
     */
    cursor?: VisitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitantes.
     */
    distinct?: VisitanteScalarFieldEnum | VisitanteScalarFieldEnum[]
  }

  /**
   * Visitante findMany
   */
  export type VisitanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
    /**
     * Filter, which Visitantes to fetch.
     */
    where?: VisitanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitantes to fetch.
     */
    orderBy?: VisitanteOrderByWithRelationInput | VisitanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitantes.
     */
    cursor?: VisitanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitantes.
     */
    distinct?: VisitanteScalarFieldEnum | VisitanteScalarFieldEnum[]
  }

  /**
   * Visitante create
   */
  export type VisitanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitante.
     */
    data: XOR<VisitanteCreateInput, VisitanteUncheckedCreateInput>
  }

  /**
   * Visitante createMany
   */
  export type VisitanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitantes.
     */
    data: VisitanteCreateManyInput | VisitanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitante createManyAndReturn
   */
  export type VisitanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * The data used to create many Visitantes.
     */
    data: VisitanteCreateManyInput | VisitanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitante update
   */
  export type VisitanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitante.
     */
    data: XOR<VisitanteUpdateInput, VisitanteUncheckedUpdateInput>
    /**
     * Choose, which Visitante to update.
     */
    where: VisitanteWhereUniqueInput
  }

  /**
   * Visitante updateMany
   */
  export type VisitanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitantes.
     */
    data: XOR<VisitanteUpdateManyMutationInput, VisitanteUncheckedUpdateManyInput>
    /**
     * Filter which Visitantes to update
     */
    where?: VisitanteWhereInput
    /**
     * Limit how many Visitantes to update.
     */
    limit?: number
  }

  /**
   * Visitante updateManyAndReturn
   */
  export type VisitanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * The data used to update Visitantes.
     */
    data: XOR<VisitanteUpdateManyMutationInput, VisitanteUncheckedUpdateManyInput>
    /**
     * Filter which Visitantes to update
     */
    where?: VisitanteWhereInput
    /**
     * Limit how many Visitantes to update.
     */
    limit?: number
  }

  /**
   * Visitante upsert
   */
  export type VisitanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitante to update in case it exists.
     */
    where: VisitanteWhereUniqueInput
    /**
     * In case the Visitante found by the `where` argument doesn't exist, create a new Visitante with this data.
     */
    create: XOR<VisitanteCreateInput, VisitanteUncheckedCreateInput>
    /**
     * In case the Visitante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitanteUpdateInput, VisitanteUncheckedUpdateInput>
  }

  /**
   * Visitante delete
   */
  export type VisitanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
    /**
     * Filter which Visitante to delete.
     */
    where: VisitanteWhereUniqueInput
  }

  /**
   * Visitante deleteMany
   */
  export type VisitanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitantes to delete
     */
    where?: VisitanteWhereInput
    /**
     * Limit how many Visitantes to delete.
     */
    limit?: number
  }

  /**
   * Visitante.reservas
   */
  export type Visitante$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Visitante without action
   */
  export type VisitanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitante
     */
    select?: VisitanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitante
     */
    omit?: VisitanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitanteInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id: number | null
    visitanteId: number | null
    horarioId: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id: number | null
    visitanteId: number | null
    horarioId: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id: number | null
    codigoReserva: string | null
    visitanteId: number | null
    horarioId: number | null
    fecha: Date | null
    estado: $Enums.EstadoReserva | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: number | null
    codigoReserva: string | null
    visitanteId: number | null
    horarioId: number | null
    fecha: Date | null
    estado: $Enums.EstadoReserva | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    codigoReserva: number
    visitanteId: number
    horarioId: number
    fecha: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id?: true
    visitanteId?: true
    horarioId?: true
  }

  export type ReservaSumAggregateInputType = {
    id?: true
    visitanteId?: true
    horarioId?: true
  }

  export type ReservaMinAggregateInputType = {
    id?: true
    codigoReserva?: true
    visitanteId?: true
    horarioId?: true
    fecha?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    codigoReserva?: true
    visitanteId?: true
    horarioId?: true
    fecha?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    codigoReserva?: true
    visitanteId?: true
    horarioId?: true
    fecha?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: number
    codigoReserva: string
    visitanteId: number
    horarioId: number
    fecha: Date
    estado: $Enums.EstadoReserva
    createdAt: Date
    updatedAt: Date
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoReserva?: boolean
    visitanteId?: boolean
    horarioId?: boolean
    fecha?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitante?: boolean | VisitanteDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoReserva?: boolean
    visitanteId?: boolean
    horarioId?: boolean
    fecha?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitante?: boolean | VisitanteDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoReserva?: boolean
    visitanteId?: boolean
    horarioId?: boolean
    fecha?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitante?: boolean | VisitanteDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectScalar = {
    id?: boolean
    codigoReserva?: boolean
    visitanteId?: boolean
    horarioId?: boolean
    fecha?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigoReserva" | "visitanteId" | "horarioId" | "fecha" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitante?: boolean | VisitanteDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitante?: boolean | VisitanteDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitante?: boolean | VisitanteDefaultArgs<ExtArgs>
    horario?: boolean | HorarioDefaultArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      visitante: Prisma.$VisitantePayload<ExtArgs>
      horario: Prisma.$HorarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigoReserva: string
      visitanteId: number
      horarioId: number
      fecha: Date
      estado: $Enums.EstadoReserva
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visitante<T extends VisitanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitanteDefaultArgs<ExtArgs>>): Prisma__VisitanteClient<$Result.GetResult<Prisma.$VisitantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    horario<T extends HorarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorarioDefaultArgs<ExtArgs>>): Prisma__HorarioClient<$Result.GetResult<Prisma.$HorarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'Int'>
    readonly codigoReserva: FieldRef<"Reserva", 'String'>
    readonly visitanteId: FieldRef<"Reserva", 'Int'>
    readonly horarioId: FieldRef<"Reserva", 'Int'>
    readonly fecha: FieldRef<"Reserva", 'DateTime'>
    readonly estado: FieldRef<"Reserva", 'EstadoReserva'>
    readonly createdAt: FieldRef<"Reserva", 'DateTime'>
    readonly updatedAt: FieldRef<"Reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva createManyAndReturn
   */
  export type ReservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva updateManyAndReturn
   */
  export type ReservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DeporteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeporteScalarFieldEnum = (typeof DeporteScalarFieldEnum)[keyof typeof DeporteScalarFieldEnum]


  export const CanchaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    ubicacion: 'ubicacion',
    capacidad: 'capacidad',
    estado: 'estado',
    deporteId: 'deporteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CanchaScalarFieldEnum = (typeof CanchaScalarFieldEnum)[keyof typeof CanchaScalarFieldEnum]


  export const HorarioScalarFieldEnum: {
    id: 'id',
    canchaId: 'canchaId',
    diaSemana: 'diaSemana',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    disponible: 'disponible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HorarioScalarFieldEnum = (typeof HorarioScalarFieldEnum)[keyof typeof HorarioScalarFieldEnum]


  export const VisitanteScalarFieldEnum: {
    id: 'id',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitanteScalarFieldEnum = (typeof VisitanteScalarFieldEnum)[keyof typeof VisitanteScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    codigoReserva: 'codigoReserva',
    visitanteId: 'visitanteId',
    horarioId: 'horarioId',
    fecha: 'fecha',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EstadoReserva'
   */
  export type EnumEstadoReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReserva'>
    


  /**
   * Reference to a field of type 'EstadoReserva[]'
   */
  export type ListEnumEstadoReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReserva[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DeporteWhereInput = {
    AND?: DeporteWhereInput | DeporteWhereInput[]
    OR?: DeporteWhereInput[]
    NOT?: DeporteWhereInput | DeporteWhereInput[]
    id?: IntFilter<"Deporte"> | number
    nombre?: StringFilter<"Deporte"> | string
    descripcion?: StringNullableFilter<"Deporte"> | string | null
    createdAt?: DateTimeFilter<"Deporte"> | Date | string
    updatedAt?: DateTimeFilter<"Deporte"> | Date | string
    canchas?: CanchaListRelationFilter
  }

  export type DeporteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canchas?: CanchaOrderByRelationAggregateInput
  }

  export type DeporteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: DeporteWhereInput | DeporteWhereInput[]
    OR?: DeporteWhereInput[]
    NOT?: DeporteWhereInput | DeporteWhereInput[]
    descripcion?: StringNullableFilter<"Deporte"> | string | null
    createdAt?: DateTimeFilter<"Deporte"> | Date | string
    updatedAt?: DateTimeFilter<"Deporte"> | Date | string
    canchas?: CanchaListRelationFilter
  }, "id" | "nombre">

  export type DeporteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeporteCountOrderByAggregateInput
    _avg?: DeporteAvgOrderByAggregateInput
    _max?: DeporteMaxOrderByAggregateInput
    _min?: DeporteMinOrderByAggregateInput
    _sum?: DeporteSumOrderByAggregateInput
  }

  export type DeporteScalarWhereWithAggregatesInput = {
    AND?: DeporteScalarWhereWithAggregatesInput | DeporteScalarWhereWithAggregatesInput[]
    OR?: DeporteScalarWhereWithAggregatesInput[]
    NOT?: DeporteScalarWhereWithAggregatesInput | DeporteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deporte"> | number
    nombre?: StringWithAggregatesFilter<"Deporte"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Deporte"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Deporte"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deporte"> | Date | string
  }

  export type CanchaWhereInput = {
    AND?: CanchaWhereInput | CanchaWhereInput[]
    OR?: CanchaWhereInput[]
    NOT?: CanchaWhereInput | CanchaWhereInput[]
    id?: IntFilter<"Cancha"> | number
    nombre?: StringFilter<"Cancha"> | string
    descripcion?: StringNullableFilter<"Cancha"> | string | null
    ubicacion?: StringFilter<"Cancha"> | string
    capacidad?: IntFilter<"Cancha"> | number
    estado?: BoolFilter<"Cancha"> | boolean
    deporteId?: IntFilter<"Cancha"> | number
    createdAt?: DateTimeFilter<"Cancha"> | Date | string
    updatedAt?: DateTimeFilter<"Cancha"> | Date | string
    deporte?: XOR<DeporteScalarRelationFilter, DeporteWhereInput>
    horarios?: HorarioListRelationFilter
  }

  export type CanchaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    deporteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deporte?: DeporteOrderByWithRelationInput
    horarios?: HorarioOrderByRelationAggregateInput
  }

  export type CanchaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CanchaWhereInput | CanchaWhereInput[]
    OR?: CanchaWhereInput[]
    NOT?: CanchaWhereInput | CanchaWhereInput[]
    nombre?: StringFilter<"Cancha"> | string
    descripcion?: StringNullableFilter<"Cancha"> | string | null
    ubicacion?: StringFilter<"Cancha"> | string
    capacidad?: IntFilter<"Cancha"> | number
    estado?: BoolFilter<"Cancha"> | boolean
    deporteId?: IntFilter<"Cancha"> | number
    createdAt?: DateTimeFilter<"Cancha"> | Date | string
    updatedAt?: DateTimeFilter<"Cancha"> | Date | string
    deporte?: XOR<DeporteScalarRelationFilter, DeporteWhereInput>
    horarios?: HorarioListRelationFilter
  }, "id">

  export type CanchaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    deporteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CanchaCountOrderByAggregateInput
    _avg?: CanchaAvgOrderByAggregateInput
    _max?: CanchaMaxOrderByAggregateInput
    _min?: CanchaMinOrderByAggregateInput
    _sum?: CanchaSumOrderByAggregateInput
  }

  export type CanchaScalarWhereWithAggregatesInput = {
    AND?: CanchaScalarWhereWithAggregatesInput | CanchaScalarWhereWithAggregatesInput[]
    OR?: CanchaScalarWhereWithAggregatesInput[]
    NOT?: CanchaScalarWhereWithAggregatesInput | CanchaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cancha"> | number
    nombre?: StringWithAggregatesFilter<"Cancha"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Cancha"> | string | null
    ubicacion?: StringWithAggregatesFilter<"Cancha"> | string
    capacidad?: IntWithAggregatesFilter<"Cancha"> | number
    estado?: BoolWithAggregatesFilter<"Cancha"> | boolean
    deporteId?: IntWithAggregatesFilter<"Cancha"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cancha"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cancha"> | Date | string
  }

  export type HorarioWhereInput = {
    AND?: HorarioWhereInput | HorarioWhereInput[]
    OR?: HorarioWhereInput[]
    NOT?: HorarioWhereInput | HorarioWhereInput[]
    id?: IntFilter<"Horario"> | number
    canchaId?: IntFilter<"Horario"> | number
    diaSemana?: StringFilter<"Horario"> | string
    horaInicio?: StringFilter<"Horario"> | string
    horaFin?: StringFilter<"Horario"> | string
    disponible?: BoolFilter<"Horario"> | boolean
    createdAt?: DateTimeFilter<"Horario"> | Date | string
    updatedAt?: DateTimeFilter<"Horario"> | Date | string
    cancha?: XOR<CanchaScalarRelationFilter, CanchaWhereInput>
    reservas?: ReservaListRelationFilter
  }

  export type HorarioOrderByWithRelationInput = {
    id?: SortOrder
    canchaId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cancha?: CanchaOrderByWithRelationInput
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type HorarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HorarioWhereInput | HorarioWhereInput[]
    OR?: HorarioWhereInput[]
    NOT?: HorarioWhereInput | HorarioWhereInput[]
    canchaId?: IntFilter<"Horario"> | number
    diaSemana?: StringFilter<"Horario"> | string
    horaInicio?: StringFilter<"Horario"> | string
    horaFin?: StringFilter<"Horario"> | string
    disponible?: BoolFilter<"Horario"> | boolean
    createdAt?: DateTimeFilter<"Horario"> | Date | string
    updatedAt?: DateTimeFilter<"Horario"> | Date | string
    cancha?: XOR<CanchaScalarRelationFilter, CanchaWhereInput>
    reservas?: ReservaListRelationFilter
  }, "id">

  export type HorarioOrderByWithAggregationInput = {
    id?: SortOrder
    canchaId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HorarioCountOrderByAggregateInput
    _avg?: HorarioAvgOrderByAggregateInput
    _max?: HorarioMaxOrderByAggregateInput
    _min?: HorarioMinOrderByAggregateInput
    _sum?: HorarioSumOrderByAggregateInput
  }

  export type HorarioScalarWhereWithAggregatesInput = {
    AND?: HorarioScalarWhereWithAggregatesInput | HorarioScalarWhereWithAggregatesInput[]
    OR?: HorarioScalarWhereWithAggregatesInput[]
    NOT?: HorarioScalarWhereWithAggregatesInput | HorarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Horario"> | number
    canchaId?: IntWithAggregatesFilter<"Horario"> | number
    diaSemana?: StringWithAggregatesFilter<"Horario"> | string
    horaInicio?: StringWithAggregatesFilter<"Horario"> | string
    horaFin?: StringWithAggregatesFilter<"Horario"> | string
    disponible?: BoolWithAggregatesFilter<"Horario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Horario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Horario"> | Date | string
  }

  export type VisitanteWhereInput = {
    AND?: VisitanteWhereInput | VisitanteWhereInput[]
    OR?: VisitanteWhereInput[]
    NOT?: VisitanteWhereInput | VisitanteWhereInput[]
    id?: IntFilter<"Visitante"> | number
    nombres?: StringFilter<"Visitante"> | string
    apellidos?: StringFilter<"Visitante"> | string
    correo?: StringFilter<"Visitante"> | string
    telefono?: StringNullableFilter<"Visitante"> | string | null
    createdAt?: DateTimeFilter<"Visitante"> | Date | string
    updatedAt?: DateTimeFilter<"Visitante"> | Date | string
    reservas?: ReservaListRelationFilter
  }

  export type VisitanteOrderByWithRelationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type VisitanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: VisitanteWhereInput | VisitanteWhereInput[]
    OR?: VisitanteWhereInput[]
    NOT?: VisitanteWhereInput | VisitanteWhereInput[]
    nombres?: StringFilter<"Visitante"> | string
    apellidos?: StringFilter<"Visitante"> | string
    telefono?: StringNullableFilter<"Visitante"> | string | null
    createdAt?: DateTimeFilter<"Visitante"> | Date | string
    updatedAt?: DateTimeFilter<"Visitante"> | Date | string
    reservas?: ReservaListRelationFilter
  }, "id" | "correo">

  export type VisitanteOrderByWithAggregationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisitanteCountOrderByAggregateInput
    _avg?: VisitanteAvgOrderByAggregateInput
    _max?: VisitanteMaxOrderByAggregateInput
    _min?: VisitanteMinOrderByAggregateInput
    _sum?: VisitanteSumOrderByAggregateInput
  }

  export type VisitanteScalarWhereWithAggregatesInput = {
    AND?: VisitanteScalarWhereWithAggregatesInput | VisitanteScalarWhereWithAggregatesInput[]
    OR?: VisitanteScalarWhereWithAggregatesInput[]
    NOT?: VisitanteScalarWhereWithAggregatesInput | VisitanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visitante"> | number
    nombres?: StringWithAggregatesFilter<"Visitante"> | string
    apellidos?: StringWithAggregatesFilter<"Visitante"> | string
    correo?: StringWithAggregatesFilter<"Visitante"> | string
    telefono?: StringNullableWithAggregatesFilter<"Visitante"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Visitante"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Visitante"> | Date | string
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: IntFilter<"Reserva"> | number
    codigoReserva?: StringFilter<"Reserva"> | string
    visitanteId?: IntFilter<"Reserva"> | number
    horarioId?: IntFilter<"Reserva"> | number
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    estado?: EnumEstadoReservaFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    visitante?: XOR<VisitanteScalarRelationFilter, VisitanteWhereInput>
    horario?: XOR<HorarioScalarRelationFilter, HorarioWhereInput>
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    codigoReserva?: SortOrder
    visitanteId?: SortOrder
    horarioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visitante?: VisitanteOrderByWithRelationInput
    horario?: HorarioOrderByWithRelationInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigoReserva?: string
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    visitanteId?: IntFilter<"Reserva"> | number
    horarioId?: IntFilter<"Reserva"> | number
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    estado?: EnumEstadoReservaFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    visitante?: XOR<VisitanteScalarRelationFilter, VisitanteWhereInput>
    horario?: XOR<HorarioScalarRelationFilter, HorarioWhereInput>
  }, "id" | "codigoReserva">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    codigoReserva?: SortOrder
    visitanteId?: SortOrder
    horarioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reserva"> | number
    codigoReserva?: StringWithAggregatesFilter<"Reserva"> | string
    visitanteId?: IntWithAggregatesFilter<"Reserva"> | number
    horarioId?: IntWithAggregatesFilter<"Reserva"> | number
    fecha?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    estado?: EnumEstadoReservaWithAggregatesFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
  }

  export type DeporteCreateInput = {
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    canchas?: CanchaCreateNestedManyWithoutDeporteInput
  }

  export type DeporteUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    canchas?: CanchaUncheckedCreateNestedManyWithoutDeporteInput
  }

  export type DeporteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canchas?: CanchaUpdateManyWithoutDeporteNestedInput
  }

  export type DeporteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canchas?: CanchaUncheckedUpdateManyWithoutDeporteNestedInput
  }

  export type DeporteCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeporteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeporteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanchaCreateInput = {
    nombre: string
    descripcion?: string | null
    ubicacion: string
    capacidad: number
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deporte: DeporteCreateNestedOneWithoutCanchasInput
    horarios?: HorarioCreateNestedManyWithoutCanchaInput
  }

  export type CanchaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    ubicacion: string
    capacidad: number
    estado?: boolean
    deporteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    horarios?: HorarioUncheckedCreateNestedManyWithoutCanchaInput
  }

  export type CanchaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deporte?: DeporteUpdateOneRequiredWithoutCanchasNestedInput
    horarios?: HorarioUpdateManyWithoutCanchaNestedInput
  }

  export type CanchaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    deporteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioUncheckedUpdateManyWithoutCanchaNestedInput
  }

  export type CanchaCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    ubicacion: string
    capacidad: number
    estado?: boolean
    deporteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CanchaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanchaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    deporteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioCreateInput = {
    diaSemana: string
    horaInicio: string
    horaFin: string
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cancha: CanchaCreateNestedOneWithoutHorariosInput
    reservas?: ReservaCreateNestedManyWithoutHorarioInput
  }

  export type HorarioUncheckedCreateInput = {
    id?: number
    canchaId: number
    diaSemana: string
    horaInicio: string
    horaFin: string
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutHorarioInput
  }

  export type HorarioUpdateInput = {
    diaSemana?: StringFieldUpdateOperationsInput | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: CanchaUpdateOneRequiredWithoutHorariosNestedInput
    reservas?: ReservaUpdateManyWithoutHorarioNestedInput
  }

  export type HorarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    canchaId?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutHorarioNestedInput
  }

  export type HorarioCreateManyInput = {
    id?: number
    canchaId: number
    diaSemana: string
    horaInicio: string
    horaFin: string
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioUpdateManyMutationInput = {
    diaSemana?: StringFieldUpdateOperationsInput | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    canchaId?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitanteCreateInput = {
    nombres: string
    apellidos: string
    correo: string
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutVisitanteInput
  }

  export type VisitanteUncheckedCreateInput = {
    id?: number
    nombres: string
    apellidos: string
    correo: string
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type VisitanteUpdateInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutVisitanteNestedInput
  }

  export type VisitanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type VisitanteCreateManyInput = {
    id?: number
    nombres: string
    apellidos: string
    correo: string
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitanteUpdateManyMutationInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateInput = {
    codigoReserva: string
    fecha: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    visitante: VisitanteCreateNestedOneWithoutReservasInput
    horario: HorarioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: number
    codigoReserva: string
    visitanteId: number
    horarioId: number
    fecha: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateInput = {
    codigoReserva?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitante?: VisitanteUpdateOneRequiredWithoutReservasNestedInput
    horario?: HorarioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoReserva?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    horarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyInput = {
    id?: number
    codigoReserva: string
    visitanteId: number
    horarioId: number
    fecha: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    codigoReserva?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoReserva?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    horarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CanchaListRelationFilter = {
    every?: CanchaWhereInput
    some?: CanchaWhereInput
    none?: CanchaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CanchaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeporteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeporteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeporteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeporteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeporteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DeporteScalarRelationFilter = {
    is?: DeporteWhereInput
    isNot?: DeporteWhereInput
  }

  export type HorarioListRelationFilter = {
    every?: HorarioWhereInput
    some?: HorarioWhereInput
    none?: HorarioWhereInput
  }

  export type HorarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CanchaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    deporteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CanchaAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    deporteId?: SortOrder
  }

  export type CanchaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    deporteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CanchaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    deporteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CanchaSumOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    deporteId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CanchaScalarRelationFilter = {
    is?: CanchaWhereInput
    isNot?: CanchaWhereInput
  }

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HorarioCountOrderByAggregateInput = {
    id?: SortOrder
    canchaId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorarioAvgOrderByAggregateInput = {
    id?: SortOrder
    canchaId?: SortOrder
  }

  export type HorarioMaxOrderByAggregateInput = {
    id?: SortOrder
    canchaId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorarioMinOrderByAggregateInput = {
    id?: SortOrder
    canchaId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    disponible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorarioSumOrderByAggregateInput = {
    id?: SortOrder
    canchaId?: SortOrder
  }

  export type VisitanteCountOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitanteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitanteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitanteMinOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitanteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEstadoReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaFilter<$PrismaModel> | $Enums.EstadoReserva
  }

  export type VisitanteScalarRelationFilter = {
    is?: VisitanteWhereInput
    isNot?: VisitanteWhereInput
  }

  export type HorarioScalarRelationFilter = {
    is?: HorarioWhereInput
    isNot?: HorarioWhereInput
  }

  export type ReservaCountOrderByAggregateInput = {
    id?: SortOrder
    codigoReserva?: SortOrder
    visitanteId?: SortOrder
    horarioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    id?: SortOrder
    visitanteId?: SortOrder
    horarioId?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    codigoReserva?: SortOrder
    visitanteId?: SortOrder
    horarioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    codigoReserva?: SortOrder
    visitanteId?: SortOrder
    horarioId?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    id?: SortOrder
    visitanteId?: SortOrder
    horarioId?: SortOrder
  }

  export type EnumEstadoReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReservaFilter<$PrismaModel>
    _max?: NestedEnumEstadoReservaFilter<$PrismaModel>
  }

  export type CanchaCreateNestedManyWithoutDeporteInput = {
    create?: XOR<CanchaCreateWithoutDeporteInput, CanchaUncheckedCreateWithoutDeporteInput> | CanchaCreateWithoutDeporteInput[] | CanchaUncheckedCreateWithoutDeporteInput[]
    connectOrCreate?: CanchaCreateOrConnectWithoutDeporteInput | CanchaCreateOrConnectWithoutDeporteInput[]
    createMany?: CanchaCreateManyDeporteInputEnvelope
    connect?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
  }

  export type CanchaUncheckedCreateNestedManyWithoutDeporteInput = {
    create?: XOR<CanchaCreateWithoutDeporteInput, CanchaUncheckedCreateWithoutDeporteInput> | CanchaCreateWithoutDeporteInput[] | CanchaUncheckedCreateWithoutDeporteInput[]
    connectOrCreate?: CanchaCreateOrConnectWithoutDeporteInput | CanchaCreateOrConnectWithoutDeporteInput[]
    createMany?: CanchaCreateManyDeporteInputEnvelope
    connect?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CanchaUpdateManyWithoutDeporteNestedInput = {
    create?: XOR<CanchaCreateWithoutDeporteInput, CanchaUncheckedCreateWithoutDeporteInput> | CanchaCreateWithoutDeporteInput[] | CanchaUncheckedCreateWithoutDeporteInput[]
    connectOrCreate?: CanchaCreateOrConnectWithoutDeporteInput | CanchaCreateOrConnectWithoutDeporteInput[]
    upsert?: CanchaUpsertWithWhereUniqueWithoutDeporteInput | CanchaUpsertWithWhereUniqueWithoutDeporteInput[]
    createMany?: CanchaCreateManyDeporteInputEnvelope
    set?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
    disconnect?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
    delete?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
    connect?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
    update?: CanchaUpdateWithWhereUniqueWithoutDeporteInput | CanchaUpdateWithWhereUniqueWithoutDeporteInput[]
    updateMany?: CanchaUpdateManyWithWhereWithoutDeporteInput | CanchaUpdateManyWithWhereWithoutDeporteInput[]
    deleteMany?: CanchaScalarWhereInput | CanchaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CanchaUncheckedUpdateManyWithoutDeporteNestedInput = {
    create?: XOR<CanchaCreateWithoutDeporteInput, CanchaUncheckedCreateWithoutDeporteInput> | CanchaCreateWithoutDeporteInput[] | CanchaUncheckedCreateWithoutDeporteInput[]
    connectOrCreate?: CanchaCreateOrConnectWithoutDeporteInput | CanchaCreateOrConnectWithoutDeporteInput[]
    upsert?: CanchaUpsertWithWhereUniqueWithoutDeporteInput | CanchaUpsertWithWhereUniqueWithoutDeporteInput[]
    createMany?: CanchaCreateManyDeporteInputEnvelope
    set?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
    disconnect?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
    delete?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
    connect?: CanchaWhereUniqueInput | CanchaWhereUniqueInput[]
    update?: CanchaUpdateWithWhereUniqueWithoutDeporteInput | CanchaUpdateWithWhereUniqueWithoutDeporteInput[]
    updateMany?: CanchaUpdateManyWithWhereWithoutDeporteInput | CanchaUpdateManyWithWhereWithoutDeporteInput[]
    deleteMany?: CanchaScalarWhereInput | CanchaScalarWhereInput[]
  }

  export type DeporteCreateNestedOneWithoutCanchasInput = {
    create?: XOR<DeporteCreateWithoutCanchasInput, DeporteUncheckedCreateWithoutCanchasInput>
    connectOrCreate?: DeporteCreateOrConnectWithoutCanchasInput
    connect?: DeporteWhereUniqueInput
  }

  export type HorarioCreateNestedManyWithoutCanchaInput = {
    create?: XOR<HorarioCreateWithoutCanchaInput, HorarioUncheckedCreateWithoutCanchaInput> | HorarioCreateWithoutCanchaInput[] | HorarioUncheckedCreateWithoutCanchaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutCanchaInput | HorarioCreateOrConnectWithoutCanchaInput[]
    createMany?: HorarioCreateManyCanchaInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type HorarioUncheckedCreateNestedManyWithoutCanchaInput = {
    create?: XOR<HorarioCreateWithoutCanchaInput, HorarioUncheckedCreateWithoutCanchaInput> | HorarioCreateWithoutCanchaInput[] | HorarioUncheckedCreateWithoutCanchaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutCanchaInput | HorarioCreateOrConnectWithoutCanchaInput[]
    createMany?: HorarioCreateManyCanchaInputEnvelope
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DeporteUpdateOneRequiredWithoutCanchasNestedInput = {
    create?: XOR<DeporteCreateWithoutCanchasInput, DeporteUncheckedCreateWithoutCanchasInput>
    connectOrCreate?: DeporteCreateOrConnectWithoutCanchasInput
    upsert?: DeporteUpsertWithoutCanchasInput
    connect?: DeporteWhereUniqueInput
    update?: XOR<XOR<DeporteUpdateToOneWithWhereWithoutCanchasInput, DeporteUpdateWithoutCanchasInput>, DeporteUncheckedUpdateWithoutCanchasInput>
  }

  export type HorarioUpdateManyWithoutCanchaNestedInput = {
    create?: XOR<HorarioCreateWithoutCanchaInput, HorarioUncheckedCreateWithoutCanchaInput> | HorarioCreateWithoutCanchaInput[] | HorarioUncheckedCreateWithoutCanchaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutCanchaInput | HorarioCreateOrConnectWithoutCanchaInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutCanchaInput | HorarioUpsertWithWhereUniqueWithoutCanchaInput[]
    createMany?: HorarioCreateManyCanchaInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutCanchaInput | HorarioUpdateWithWhereUniqueWithoutCanchaInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutCanchaInput | HorarioUpdateManyWithWhereWithoutCanchaInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type HorarioUncheckedUpdateManyWithoutCanchaNestedInput = {
    create?: XOR<HorarioCreateWithoutCanchaInput, HorarioUncheckedCreateWithoutCanchaInput> | HorarioCreateWithoutCanchaInput[] | HorarioUncheckedCreateWithoutCanchaInput[]
    connectOrCreate?: HorarioCreateOrConnectWithoutCanchaInput | HorarioCreateOrConnectWithoutCanchaInput[]
    upsert?: HorarioUpsertWithWhereUniqueWithoutCanchaInput | HorarioUpsertWithWhereUniqueWithoutCanchaInput[]
    createMany?: HorarioCreateManyCanchaInputEnvelope
    set?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    disconnect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    delete?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    connect?: HorarioWhereUniqueInput | HorarioWhereUniqueInput[]
    update?: HorarioUpdateWithWhereUniqueWithoutCanchaInput | HorarioUpdateWithWhereUniqueWithoutCanchaInput[]
    updateMany?: HorarioUpdateManyWithWhereWithoutCanchaInput | HorarioUpdateManyWithWhereWithoutCanchaInput[]
    deleteMany?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
  }

  export type CanchaCreateNestedOneWithoutHorariosInput = {
    create?: XOR<CanchaCreateWithoutHorariosInput, CanchaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: CanchaCreateOrConnectWithoutHorariosInput
    connect?: CanchaWhereUniqueInput
  }

  export type ReservaCreateNestedManyWithoutHorarioInput = {
    create?: XOR<ReservaCreateWithoutHorarioInput, ReservaUncheckedCreateWithoutHorarioInput> | ReservaCreateWithoutHorarioInput[] | ReservaUncheckedCreateWithoutHorarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHorarioInput | ReservaCreateOrConnectWithoutHorarioInput[]
    createMany?: ReservaCreateManyHorarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutHorarioInput = {
    create?: XOR<ReservaCreateWithoutHorarioInput, ReservaUncheckedCreateWithoutHorarioInput> | ReservaCreateWithoutHorarioInput[] | ReservaUncheckedCreateWithoutHorarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHorarioInput | ReservaCreateOrConnectWithoutHorarioInput[]
    createMany?: ReservaCreateManyHorarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type CanchaUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<CanchaCreateWithoutHorariosInput, CanchaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: CanchaCreateOrConnectWithoutHorariosInput
    upsert?: CanchaUpsertWithoutHorariosInput
    connect?: CanchaWhereUniqueInput
    update?: XOR<XOR<CanchaUpdateToOneWithWhereWithoutHorariosInput, CanchaUpdateWithoutHorariosInput>, CanchaUncheckedUpdateWithoutHorariosInput>
  }

  export type ReservaUpdateManyWithoutHorarioNestedInput = {
    create?: XOR<ReservaCreateWithoutHorarioInput, ReservaUncheckedCreateWithoutHorarioInput> | ReservaCreateWithoutHorarioInput[] | ReservaUncheckedCreateWithoutHorarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHorarioInput | ReservaCreateOrConnectWithoutHorarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHorarioInput | ReservaUpsertWithWhereUniqueWithoutHorarioInput[]
    createMany?: ReservaCreateManyHorarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHorarioInput | ReservaUpdateWithWhereUniqueWithoutHorarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHorarioInput | ReservaUpdateManyWithWhereWithoutHorarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutHorarioNestedInput = {
    create?: XOR<ReservaCreateWithoutHorarioInput, ReservaUncheckedCreateWithoutHorarioInput> | ReservaCreateWithoutHorarioInput[] | ReservaUncheckedCreateWithoutHorarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHorarioInput | ReservaCreateOrConnectWithoutHorarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHorarioInput | ReservaUpsertWithWhereUniqueWithoutHorarioInput[]
    createMany?: ReservaCreateManyHorarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHorarioInput | ReservaUpdateWithWhereUniqueWithoutHorarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHorarioInput | ReservaUpdateManyWithWhereWithoutHorarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaCreateNestedManyWithoutVisitanteInput = {
    create?: XOR<ReservaCreateWithoutVisitanteInput, ReservaUncheckedCreateWithoutVisitanteInput> | ReservaCreateWithoutVisitanteInput[] | ReservaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutVisitanteInput | ReservaCreateOrConnectWithoutVisitanteInput[]
    createMany?: ReservaCreateManyVisitanteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutVisitanteInput = {
    create?: XOR<ReservaCreateWithoutVisitanteInput, ReservaUncheckedCreateWithoutVisitanteInput> | ReservaCreateWithoutVisitanteInput[] | ReservaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutVisitanteInput | ReservaCreateOrConnectWithoutVisitanteInput[]
    createMany?: ReservaCreateManyVisitanteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUpdateManyWithoutVisitanteNestedInput = {
    create?: XOR<ReservaCreateWithoutVisitanteInput, ReservaUncheckedCreateWithoutVisitanteInput> | ReservaCreateWithoutVisitanteInput[] | ReservaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutVisitanteInput | ReservaCreateOrConnectWithoutVisitanteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutVisitanteInput | ReservaUpsertWithWhereUniqueWithoutVisitanteInput[]
    createMany?: ReservaCreateManyVisitanteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutVisitanteInput | ReservaUpdateWithWhereUniqueWithoutVisitanteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutVisitanteInput | ReservaUpdateManyWithWhereWithoutVisitanteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutVisitanteNestedInput = {
    create?: XOR<ReservaCreateWithoutVisitanteInput, ReservaUncheckedCreateWithoutVisitanteInput> | ReservaCreateWithoutVisitanteInput[] | ReservaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutVisitanteInput | ReservaCreateOrConnectWithoutVisitanteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutVisitanteInput | ReservaUpsertWithWhereUniqueWithoutVisitanteInput[]
    createMany?: ReservaCreateManyVisitanteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutVisitanteInput | ReservaUpdateWithWhereUniqueWithoutVisitanteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutVisitanteInput | ReservaUpdateManyWithWhereWithoutVisitanteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type VisitanteCreateNestedOneWithoutReservasInput = {
    create?: XOR<VisitanteCreateWithoutReservasInput, VisitanteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: VisitanteCreateOrConnectWithoutReservasInput
    connect?: VisitanteWhereUniqueInput
  }

  export type HorarioCreateNestedOneWithoutReservasInput = {
    create?: XOR<HorarioCreateWithoutReservasInput, HorarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HorarioCreateOrConnectWithoutReservasInput
    connect?: HorarioWhereUniqueInput
  }

  export type EnumEstadoReservaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoReserva
  }

  export type VisitanteUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<VisitanteCreateWithoutReservasInput, VisitanteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: VisitanteCreateOrConnectWithoutReservasInput
    upsert?: VisitanteUpsertWithoutReservasInput
    connect?: VisitanteWhereUniqueInput
    update?: XOR<XOR<VisitanteUpdateToOneWithWhereWithoutReservasInput, VisitanteUpdateWithoutReservasInput>, VisitanteUncheckedUpdateWithoutReservasInput>
  }

  export type HorarioUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<HorarioCreateWithoutReservasInput, HorarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HorarioCreateOrConnectWithoutReservasInput
    upsert?: HorarioUpsertWithoutReservasInput
    connect?: HorarioWhereUniqueInput
    update?: XOR<XOR<HorarioUpdateToOneWithWhereWithoutReservasInput, HorarioUpdateWithoutReservasInput>, HorarioUncheckedUpdateWithoutReservasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEstadoReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaFilter<$PrismaModel> | $Enums.EstadoReserva
  }

  export type NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReservaFilter<$PrismaModel>
    _max?: NestedEnumEstadoReservaFilter<$PrismaModel>
  }

  export type CanchaCreateWithoutDeporteInput = {
    nombre: string
    descripcion?: string | null
    ubicacion: string
    capacidad: number
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    horarios?: HorarioCreateNestedManyWithoutCanchaInput
  }

  export type CanchaUncheckedCreateWithoutDeporteInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    ubicacion: string
    capacidad: number
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    horarios?: HorarioUncheckedCreateNestedManyWithoutCanchaInput
  }

  export type CanchaCreateOrConnectWithoutDeporteInput = {
    where: CanchaWhereUniqueInput
    create: XOR<CanchaCreateWithoutDeporteInput, CanchaUncheckedCreateWithoutDeporteInput>
  }

  export type CanchaCreateManyDeporteInputEnvelope = {
    data: CanchaCreateManyDeporteInput | CanchaCreateManyDeporteInput[]
    skipDuplicates?: boolean
  }

  export type CanchaUpsertWithWhereUniqueWithoutDeporteInput = {
    where: CanchaWhereUniqueInput
    update: XOR<CanchaUpdateWithoutDeporteInput, CanchaUncheckedUpdateWithoutDeporteInput>
    create: XOR<CanchaCreateWithoutDeporteInput, CanchaUncheckedCreateWithoutDeporteInput>
  }

  export type CanchaUpdateWithWhereUniqueWithoutDeporteInput = {
    where: CanchaWhereUniqueInput
    data: XOR<CanchaUpdateWithoutDeporteInput, CanchaUncheckedUpdateWithoutDeporteInput>
  }

  export type CanchaUpdateManyWithWhereWithoutDeporteInput = {
    where: CanchaScalarWhereInput
    data: XOR<CanchaUpdateManyMutationInput, CanchaUncheckedUpdateManyWithoutDeporteInput>
  }

  export type CanchaScalarWhereInput = {
    AND?: CanchaScalarWhereInput | CanchaScalarWhereInput[]
    OR?: CanchaScalarWhereInput[]
    NOT?: CanchaScalarWhereInput | CanchaScalarWhereInput[]
    id?: IntFilter<"Cancha"> | number
    nombre?: StringFilter<"Cancha"> | string
    descripcion?: StringNullableFilter<"Cancha"> | string | null
    ubicacion?: StringFilter<"Cancha"> | string
    capacidad?: IntFilter<"Cancha"> | number
    estado?: BoolFilter<"Cancha"> | boolean
    deporteId?: IntFilter<"Cancha"> | number
    createdAt?: DateTimeFilter<"Cancha"> | Date | string
    updatedAt?: DateTimeFilter<"Cancha"> | Date | string
  }

  export type DeporteCreateWithoutCanchasInput = {
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeporteUncheckedCreateWithoutCanchasInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeporteCreateOrConnectWithoutCanchasInput = {
    where: DeporteWhereUniqueInput
    create: XOR<DeporteCreateWithoutCanchasInput, DeporteUncheckedCreateWithoutCanchasInput>
  }

  export type HorarioCreateWithoutCanchaInput = {
    diaSemana: string
    horaInicio: string
    horaFin: string
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutHorarioInput
  }

  export type HorarioUncheckedCreateWithoutCanchaInput = {
    id?: number
    diaSemana: string
    horaInicio: string
    horaFin: string
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutHorarioInput
  }

  export type HorarioCreateOrConnectWithoutCanchaInput = {
    where: HorarioWhereUniqueInput
    create: XOR<HorarioCreateWithoutCanchaInput, HorarioUncheckedCreateWithoutCanchaInput>
  }

  export type HorarioCreateManyCanchaInputEnvelope = {
    data: HorarioCreateManyCanchaInput | HorarioCreateManyCanchaInput[]
    skipDuplicates?: boolean
  }

  export type DeporteUpsertWithoutCanchasInput = {
    update: XOR<DeporteUpdateWithoutCanchasInput, DeporteUncheckedUpdateWithoutCanchasInput>
    create: XOR<DeporteCreateWithoutCanchasInput, DeporteUncheckedCreateWithoutCanchasInput>
    where?: DeporteWhereInput
  }

  export type DeporteUpdateToOneWithWhereWithoutCanchasInput = {
    where?: DeporteWhereInput
    data: XOR<DeporteUpdateWithoutCanchasInput, DeporteUncheckedUpdateWithoutCanchasInput>
  }

  export type DeporteUpdateWithoutCanchasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeporteUncheckedUpdateWithoutCanchasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioUpsertWithWhereUniqueWithoutCanchaInput = {
    where: HorarioWhereUniqueInput
    update: XOR<HorarioUpdateWithoutCanchaInput, HorarioUncheckedUpdateWithoutCanchaInput>
    create: XOR<HorarioCreateWithoutCanchaInput, HorarioUncheckedCreateWithoutCanchaInput>
  }

  export type HorarioUpdateWithWhereUniqueWithoutCanchaInput = {
    where: HorarioWhereUniqueInput
    data: XOR<HorarioUpdateWithoutCanchaInput, HorarioUncheckedUpdateWithoutCanchaInput>
  }

  export type HorarioUpdateManyWithWhereWithoutCanchaInput = {
    where: HorarioScalarWhereInput
    data: XOR<HorarioUpdateManyMutationInput, HorarioUncheckedUpdateManyWithoutCanchaInput>
  }

  export type HorarioScalarWhereInput = {
    AND?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
    OR?: HorarioScalarWhereInput[]
    NOT?: HorarioScalarWhereInput | HorarioScalarWhereInput[]
    id?: IntFilter<"Horario"> | number
    canchaId?: IntFilter<"Horario"> | number
    diaSemana?: StringFilter<"Horario"> | string
    horaInicio?: StringFilter<"Horario"> | string
    horaFin?: StringFilter<"Horario"> | string
    disponible?: BoolFilter<"Horario"> | boolean
    createdAt?: DateTimeFilter<"Horario"> | Date | string
    updatedAt?: DateTimeFilter<"Horario"> | Date | string
  }

  export type CanchaCreateWithoutHorariosInput = {
    nombre: string
    descripcion?: string | null
    ubicacion: string
    capacidad: number
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deporte: DeporteCreateNestedOneWithoutCanchasInput
  }

  export type CanchaUncheckedCreateWithoutHorariosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    ubicacion: string
    capacidad: number
    estado?: boolean
    deporteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CanchaCreateOrConnectWithoutHorariosInput = {
    where: CanchaWhereUniqueInput
    create: XOR<CanchaCreateWithoutHorariosInput, CanchaUncheckedCreateWithoutHorariosInput>
  }

  export type ReservaCreateWithoutHorarioInput = {
    codigoReserva: string
    fecha: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    visitante: VisitanteCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutHorarioInput = {
    id?: number
    codigoReserva: string
    visitanteId: number
    fecha: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutHorarioInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutHorarioInput, ReservaUncheckedCreateWithoutHorarioInput>
  }

  export type ReservaCreateManyHorarioInputEnvelope = {
    data: ReservaCreateManyHorarioInput | ReservaCreateManyHorarioInput[]
    skipDuplicates?: boolean
  }

  export type CanchaUpsertWithoutHorariosInput = {
    update: XOR<CanchaUpdateWithoutHorariosInput, CanchaUncheckedUpdateWithoutHorariosInput>
    create: XOR<CanchaCreateWithoutHorariosInput, CanchaUncheckedCreateWithoutHorariosInput>
    where?: CanchaWhereInput
  }

  export type CanchaUpdateToOneWithWhereWithoutHorariosInput = {
    where?: CanchaWhereInput
    data: XOR<CanchaUpdateWithoutHorariosInput, CanchaUncheckedUpdateWithoutHorariosInput>
  }

  export type CanchaUpdateWithoutHorariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deporte?: DeporteUpdateOneRequiredWithoutCanchasNestedInput
  }

  export type CanchaUncheckedUpdateWithoutHorariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    deporteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUpsertWithWhereUniqueWithoutHorarioInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutHorarioInput, ReservaUncheckedUpdateWithoutHorarioInput>
    create: XOR<ReservaCreateWithoutHorarioInput, ReservaUncheckedCreateWithoutHorarioInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutHorarioInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutHorarioInput, ReservaUncheckedUpdateWithoutHorarioInput>
  }

  export type ReservaUpdateManyWithWhereWithoutHorarioInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutHorarioInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id?: IntFilter<"Reserva"> | number
    codigoReserva?: StringFilter<"Reserva"> | string
    visitanteId?: IntFilter<"Reserva"> | number
    horarioId?: IntFilter<"Reserva"> | number
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    estado?: EnumEstadoReservaFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
  }

  export type ReservaCreateWithoutVisitanteInput = {
    codigoReserva: string
    fecha: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    horario: HorarioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutVisitanteInput = {
    id?: number
    codigoReserva: string
    horarioId: number
    fecha: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutVisitanteInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutVisitanteInput, ReservaUncheckedCreateWithoutVisitanteInput>
  }

  export type ReservaCreateManyVisitanteInputEnvelope = {
    data: ReservaCreateManyVisitanteInput | ReservaCreateManyVisitanteInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutVisitanteInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutVisitanteInput, ReservaUncheckedUpdateWithoutVisitanteInput>
    create: XOR<ReservaCreateWithoutVisitanteInput, ReservaUncheckedCreateWithoutVisitanteInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutVisitanteInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutVisitanteInput, ReservaUncheckedUpdateWithoutVisitanteInput>
  }

  export type ReservaUpdateManyWithWhereWithoutVisitanteInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutVisitanteInput>
  }

  export type VisitanteCreateWithoutReservasInput = {
    nombres: string
    apellidos: string
    correo: string
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitanteUncheckedCreateWithoutReservasInput = {
    id?: number
    nombres: string
    apellidos: string
    correo: string
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitanteCreateOrConnectWithoutReservasInput = {
    where: VisitanteWhereUniqueInput
    create: XOR<VisitanteCreateWithoutReservasInput, VisitanteUncheckedCreateWithoutReservasInput>
  }

  export type HorarioCreateWithoutReservasInput = {
    diaSemana: string
    horaInicio: string
    horaFin: string
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cancha: CanchaCreateNestedOneWithoutHorariosInput
  }

  export type HorarioUncheckedCreateWithoutReservasInput = {
    id?: number
    canchaId: number
    diaSemana: string
    horaInicio: string
    horaFin: string
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioCreateOrConnectWithoutReservasInput = {
    where: HorarioWhereUniqueInput
    create: XOR<HorarioCreateWithoutReservasInput, HorarioUncheckedCreateWithoutReservasInput>
  }

  export type VisitanteUpsertWithoutReservasInput = {
    update: XOR<VisitanteUpdateWithoutReservasInput, VisitanteUncheckedUpdateWithoutReservasInput>
    create: XOR<VisitanteCreateWithoutReservasInput, VisitanteUncheckedCreateWithoutReservasInput>
    where?: VisitanteWhereInput
  }

  export type VisitanteUpdateToOneWithWhereWithoutReservasInput = {
    where?: VisitanteWhereInput
    data: XOR<VisitanteUpdateWithoutReservasInput, VisitanteUncheckedUpdateWithoutReservasInput>
  }

  export type VisitanteUpdateWithoutReservasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitanteUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioUpsertWithoutReservasInput = {
    update: XOR<HorarioUpdateWithoutReservasInput, HorarioUncheckedUpdateWithoutReservasInput>
    create: XOR<HorarioCreateWithoutReservasInput, HorarioUncheckedCreateWithoutReservasInput>
    where?: HorarioWhereInput
  }

  export type HorarioUpdateToOneWithWhereWithoutReservasInput = {
    where?: HorarioWhereInput
    data: XOR<HorarioUpdateWithoutReservasInput, HorarioUncheckedUpdateWithoutReservasInput>
  }

  export type HorarioUpdateWithoutReservasInput = {
    diaSemana?: StringFieldUpdateOperationsInput | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: CanchaUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    canchaId?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanchaCreateManyDeporteInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    ubicacion: string
    capacidad: number
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CanchaUpdateWithoutDeporteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioUpdateManyWithoutCanchaNestedInput
  }

  export type CanchaUncheckedUpdateWithoutDeporteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioUncheckedUpdateManyWithoutCanchaNestedInput
  }

  export type CanchaUncheckedUpdateManyWithoutDeporteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioCreateManyCanchaInput = {
    id?: number
    diaSemana: string
    horaInicio: string
    horaFin: string
    disponible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioUpdateWithoutCanchaInput = {
    diaSemana?: StringFieldUpdateOperationsInput | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutHorarioNestedInput
  }

  export type HorarioUncheckedUpdateWithoutCanchaInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutHorarioNestedInput
  }

  export type HorarioUncheckedUpdateManyWithoutCanchaInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: StringFieldUpdateOperationsInput | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyHorarioInput = {
    id?: number
    codigoReserva: string
    visitanteId: number
    fecha: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateWithoutHorarioInput = {
    codigoReserva?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitante?: VisitanteUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutHorarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoReserva?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutHorarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoReserva?: StringFieldUpdateOperationsInput | string
    visitanteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyVisitanteInput = {
    id?: number
    codigoReserva: string
    horarioId: number
    fecha: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateWithoutVisitanteInput = {
    codigoReserva?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: HorarioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutVisitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoReserva?: StringFieldUpdateOperationsInput | string
    horarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutVisitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoReserva?: StringFieldUpdateOperationsInput | string
    horarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}