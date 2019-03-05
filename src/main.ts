import * as fs from 'fs'
import { google } from './google/proto'
import * as escodegen from 'escodegen'
import * as streams from 'memory-streams'

const writer = new streams.WritableStream()
process.stdin.pipe(writer)

process.stdin.on('end', () => {
  const req = google.protobuf.compiler.CodeGeneratorRequest.decode(writer.toBuffer())
  console.error(req)
})

//escodegen.generate({})
