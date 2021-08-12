"use strict"

var CACHED_CWiseOp = {
  'float64,2,1,0': function () {
    return function divseq_cwise_loop_2s1s0m3f64(SS, a0, t0, p0, Y0) {
      var s0 = SS[0], s1 = SS[1], s2 = SS[2], t0p0 = t0[0], t0p1 = t0[1], t0p2 = t0[2]
      p0 |= 0
      var i0 = 0, i1 = 0, i2 = 0, d0s0 = t0p2, d0s1 = (t0p1 - s2 * t0p2), d0s2 = (t0p0 - s1 * t0p1)
      for (i2 = 0; i2 < s0; ++i2) {
        for (i1 = 0; i1 < s1; ++i1) {
          for (i0 = 0; i0 < s2; ++i0) {
            a0[p0] /= Y0
            p0 += d0s0
          }
          p0 += d0s1
        }
        p0 += d0s2
      }
    }
  },
  'uint8,2,0,1,float64,2,1,0': function () {
    return function muls_cwise_loop_2s0s1m1u8f64(SS, a0, t0, p0, a1, t1, p1, Y0) {
      var s0 = SS[0], s1 = SS[1], s2 = SS[2], t0p0 = t0[0], t0p1 = t0[1], t0p2 = t0[2], t1p0 = t1[0], t1p1 = t1[1], t1p2 = t1[2]
      p0 |= 0
      p1 |= 0
      var offset0 = p0
      var offset1 = p1
      for (var j1 = SS[0] | 0; j1 > 0;) {
        if (j1 < 64) {
          s0 = j1
          j1 = 0
        } else {
          s0 = 64
          j1 -= 64
        }
        for (var j2 = SS[1] | 0; j2 > 0;) {
          if (j2 < 64) {
            s1 = j2
            j2 = 0
          } else {
            s1 = 64
            j2 -= 64
          }
          p0 = (offset0 + j1 * t0p0 + j2 * t0p1)
          p1 = (offset1 + j1 * t1p0 + j2 * t1p1)
          var i0 = 0, i1 = 0, i2 = 0, d0s0 = t0p2, d0s1 = (t0p0 - s2 * t0p2), d0s2 = (t0p1 - s0 * t0p0), d1s0 = t1p2, d1s1 = (t1p0 - s2 * t1p2), d1s2 = (t1p1 - s0 * t1p0)
          for (i2 = 0; i2 < s1; ++i2) {
            for (i1 = 0; i1 < s0; ++i1) {
              for (i0 = 0; i0 < s2; ++i0) {
                a0[p0] = a1[p1] * Y0
                p0 += d0s0
                p1 += d1s0
              }
              p0 += d0s1
              p1 += d1s1
            }
            p0 += d0s2
            p1 += d1s2
          }
        }
      }
    }
  },
  'float32,1,0,float32,1,0': function () {
    return function assign_cwise_loop_1s0m2f32(SS, a0, t0, p0, a1, t1, p1) {
      var s0 = SS[0], s1 = SS[1], t0p0 = t0[0], t0p1 = t0[1], t1p0 = t1[0], t1p1 = t1[1]
      p0 |= 0
      p1 |= 0
      var i0 = 0, i1 = 0, d0s0 = t0p1, d0s1 = (t0p0 - s1 * t0p1), d1s0 = t1p1, d1s1 = (t1p0 - s1 * t1p1)
      for (i1 = 0; i1 < s0; ++i1) {
        for (i0 = 0; i0 < s1; ++i0) {
          a0[p0] = a1[p1]
          p0 += d0s0
          p1 += d1s0
        }
        p0 += d0s1
        p1 += d1s1
      }
    }
  },
  'float32,1,0,float32,0,1': function () {
    return function assign_cwise_loop_1s0m0f32(SS, a0, t0, p0, a1, t1, p1) {
      var s0 = SS[0], s1 = SS[1], t0p0 = t0[0], t0p1 = t0[1], t1p0 = t1[0], t1p1 = t1[1]
      p0 |= 0
      p1 |= 0
      var offset0 = p0
      var offset1 = p1
      for (var j0 = SS[1] | 0; j0 > 0;) {
        if (j0 < 64) {
          s1 = j0
          j0 = 0
        } else {
          s1 = 64
          j0 -= 64
        }
        for (var j1 = SS[0] | 0; j1 > 0;) {
          if (j1 < 64) {
            s0 = j1
            j1 = 0
          } else {
            s0 = 64
            j1 -= 64
          }
          p0 = (offset0 + j0 * t0p1 + j1 * t0p0)
          p1 = (offset1 + j0 * t1p1 + j1 * t1p0)
          var i0 = 0, i1 = 0, d0s0 = t0p1, d0s1 = (t0p0 - s1 * t0p1), d1s0 = t1p1, d1s1 = (t1p0 - s1 * t1p1)
          for (i1 = 0; i1 < s0; ++i1) {
            for (i0 = 0; i0 < s1; ++i0) {
              a0[p0] = a1[p1]
              p0 += d0s0
              p1 += d1s0
            }
            p0 += d0s1
            p1 += d1s1
          }
        }
      }
    }
  },
  'uint8,2,0,1,uint8,1,2,0': function () {
    return function assign_cwise_loop_2s0s1m0u8(SS, a0, t0, p0, a1, t1, p1) {
      var s0 = SS[0], s1 = SS[1], s2 = SS[2], t0p0 = t0[0], t0p1 = t0[1], t0p2 = t0[2], t1p0 = t1[0], t1p1 = t1[1], t1p2 = t1[2]
      p0 |= 0
      p1 |= 0
      var offset0 = p0
      var offset1 = p1
      for (var j0 = SS[2] | 0; j0 > 0;) {
        if (j0 < 64) {
          s2 = j0
          j0 = 0
        } else {
          s2 = 64
          j0 -= 64
        }
        for (var j1 = SS[0] | 0; j1 > 0;) {
          if (j1 < 64) {
            s0 = j1
            j1 = 0
          } else {
            s0 = 64
            j1 -= 64
          }
          for (var j2 = SS[1] | 0; j2 > 0;) {
            if (j2 < 64) {
              s1 = j2
              j2 = 0
            } else {
              s1 = 64
              j2 -= 64
            }
            p0 = (offset0 + j0 * t0p2 + j1 * t0p0 + j2 * t0p1)
            p1 = (offset1 + j0 * t1p2 + j1 * t1p0 + j2 * t1p1)
            var i0 = 0, i1 = 0, i2 = 0, d0s0 = t0p2, d0s1 = (t0p0 - s2 * t0p2), d0s2 = (t0p1 - s0 * t0p0), d1s0 = t1p2, d1s1 = (t1p0 - s2 * t1p2), d1s2 = (t1p1 - s0 * t1p0)
            for (i2 = 0; i2 < s1; ++i2) {
              for (i1 = 0; i1 < s0; ++i1) {
                for (i0 = 0; i0 < s2; ++i0) {
                  a0[p0] = a1[p1]
                  p0 += d0s0
                  p1 += d1s0
                }
                p0 += d0s1
                p1 += d1s1
              }
              p0 += d0s2
              p1 += d1s2
            }
          }
        }
      }
    }
  },
  'uint8,2,0,1,array,2,0,1': function () {
    return function assign_cwise_loop_2s0s1m3u8a(SS, a0, t0, p0, a1, t1, p1) {
      var s0 = SS[0], s1 = SS[1], s2 = SS[2], t0p0 = t0[0], t0p1 = t0[1], t0p2 = t0[2], t1p0 = t1[0], t1p1 = t1[1], t1p2 = t1[2]
      p0 |= 0
      p1 |= 0
      var i0 = 0, i1 = 0, i2 = 0, d0s0 = t0p2, d0s1 = (t0p0 - s2 * t0p2), d0s2 = (t0p1 - s0 * t0p0), d1s0 = t1p2, d1s1 = (t1p0 - s2 * t1p2), d1s2 = (t1p1 - s0 * t1p0)
      for (i2 = 0; i2 < s1; ++i2) {
        for (i1 = 0; i1 < s0; ++i1) {
          for (i0 = 0; i0 < s2; ++i0) {
            a0[p0] = a1[p1]
            p0 += d0s0
            p1 += d1s0
          }
          p0 += d0s1
          p1 += d1s1
        }
        p0 += d0s2
        p1 += d1s2
      }
    }
  },
}

//Generates a cwise operator
function generateCWiseOp(proc, typesig) {
  var key = typesig.join(',')
  var f = CACHED_CWiseOp[key]
  return f()
}

var compile = generateCWiseOp

function createThunk(proc) {
  var code = ["'use strict'", "var CACHED={}"]
  var vars = []
  var thunkName = proc.funcName + "_cwise_thunk"

  //Build thunk
  code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""))
  var typesig = []
  var string_typesig = []
  var proc_args = [["array",proc.arrayArgs[0],".shape.slice(", // Slice shape so that we only retain the shape over which we iterate (which gets passed to the cwise operator as SS).
                    Math.max(0,proc.arrayBlockIndices[0]),proc.arrayBlockIndices[0]<0?(","+proc.arrayBlockIndices[0]+")"):")"].join("")]
  var shapeLengthConditions = [], shapeConditions = []
  // Process array arguments
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    var j = proc.arrayArgs[i]
    vars.push(["t", j, "=array", j, ".dtype,",
               "r", j, "=array", j, ".order"].join(""))
    typesig.push("t" + j)
    typesig.push("r" + j)
    string_typesig.push("t"+j)
    string_typesig.push("r"+j+".join()")
    proc_args.push("array" + j + ".data")
    proc_args.push("array" + j + ".stride")
    proc_args.push("array" + j + ".offset|0")
    if (i>0) { // Gather conditions to check for shape equality (ignoring block indices)
      shapeLengthConditions.push("array" + proc.arrayArgs[0] + ".shape.length===array" + j + ".shape.length+" + (Math.abs(proc.arrayBlockIndices[0])-Math.abs(proc.arrayBlockIndices[i])))
      shapeConditions.push("array" + proc.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[0]) + "]===array" + j + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[i]) + "]")
    }
  }
  // Check for shape equality
  if (proc.arrayArgs.length > 1) {
    code.push("if (!(" + shapeLengthConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')")
    code.push("for(var shapeIndex=array" + proc.arrayArgs[0] + ".shape.length-" + Math.abs(proc.arrayBlockIndices[0]) + "; shapeIndex-->0;) {")
    code.push("if (!(" + shapeConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')")
    code.push("}")
  }
  // Process scalar arguments
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    proc_args.push("scalar" + proc.scalarArgs[i])
  }
  // Check for cached function (and if not present, generate it)
  vars.push(["type=[", string_typesig.join(","), "].join()"].join(""))
  vars.push("proc=CACHED[type]")
  code.push("var " + vars.join(","))

  code.push(["if(!proc){",
             "CACHED[type]=proc=compile([", typesig.join(","), "])}",
             "return proc(", proc_args.join(","), ")}"].join(""))

  if(proc.debug) {
    console.log("-----Generated thunk:\n" + code.join("\n") + "\n----------")
  }

  //Compile thunk
  var thunk = new Function("compile", code.join("\n"))
  return thunk(compile.bind(undefined, proc))
}

function Procedure() {
  this.argTypes = []
  this.shimArgs = []
  this.arrayArgs = []
  this.arrayBlockIndices = []
  this.scalarArgs = []
  this.offsetArgs = []
  this.offsetArgIndex = []
  this.indexArgs = []
  this.shapeArgs = []
  this.funcName = ""
  this.pre = null
  this.body = null
  this.post = null
  this.debug = false
}

function compileCwise(user_args) {
  //Create procedure
  var proc = new Procedure()

  //Parse blocks
  proc.pre    = user_args.pre
  proc.body   = user_args.body
  proc.post   = user_args.post

  //Parse arguments
  var proc_args = user_args.args.slice(0)
  proc.argTypes = proc_args
  for(var i=0; i<proc_args.length; ++i) {
    var arg_type = proc_args[i]
    if(arg_type === "array" || (typeof arg_type === "object" && arg_type.blockIndices)) {
      proc.argTypes[i] = "array"
      proc.arrayArgs.push(i)
      proc.arrayBlockIndices.push(arg_type.blockIndices ? arg_type.blockIndices : 0)
      proc.shimArgs.push("array" + i)
      if(i < proc.pre.args.length && proc.pre.args[i].count>0) {
        throw new Error("cwise: pre() block may not reference array args")
      }
      if(i < proc.post.args.length && proc.post.args[i].count>0) {
        throw new Error("cwise: post() block may not reference array args")
      }
    } else if(arg_type === "scalar") {
      proc.scalarArgs.push(i)
      proc.shimArgs.push("scalar" + i)
    } else if(arg_type === "index") {
      proc.indexArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].count > 0) {
        throw new Error("cwise: pre() block may not reference array index")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array index")
      }
      if(i < proc.post.args.length && proc.post.args[i].count > 0) {
        throw new Error("cwise: post() block may not reference array index")
      }
    } else if(arg_type === "shape") {
      proc.shapeArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].lvalue) {
        throw new Error("cwise: pre() block may not write to array shape")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array shape")
      }
      if(i < proc.post.args.length && proc.post.args[i].lvalue) {
        throw new Error("cwise: post() block may not write to array shape")
      }
    } else if(typeof arg_type === "object" && arg_type.offset) {
      proc.argTypes[i] = "offset"
      proc.offsetArgs.push({ array: arg_type.array, offset:arg_type.offset })
      proc.offsetArgIndex.push(i)
    } else {
      throw new Error("cwise: Unknown argument type " + proc_args[i])
    }
  }

  //Make sure at least one array argument was specified
  if(proc.arrayArgs.length <= 0) {
    throw new Error("cwise: No array arguments specified")
  }

  //Make sure arguments are correct
  if(proc.pre.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in pre() block")
  }
  if(proc.body.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in body() block")
  }
  if(proc.post.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in post() block")
  }

  //Check debug flag
  proc.debug = !!user_args.printCode || !!user_args.debug

  //Retrieve name
  proc.funcName = user_args.funcName || "cwise"

  //Read in block size
  proc.blockSize = user_args.blockSize || 64

  return createThunk(proc)
}

var EmptyProc = {
  body: "",
  args: [],
  thisVars: [],
  localVars: []
}

function fixup(x) {
  if(!x) {
    return EmptyProc
  }
  for(var i=0; i<x.args.length; ++i) {
    var a = x.args[i]
    if(i === 0) {
      x.args[i] = {name: a, lvalue:true, rvalue: !!x.rvalue, count:x.count||1 }
    } else {
      x.args[i] = {name: a, lvalue:false, rvalue:true, count: 1}
    }
  }
  if(!x.thisVars) {
    x.thisVars = []
  }
  if(!x.localVars) {
    x.localVars = []
  }
  return x
}

function pcompile(user_args) {
  return compileCwise({
    args:     user_args.args,
    pre:      fixup(user_args.pre),
    body:     fixup(user_args.body),
    post:     fixup(user_args.proc),
    funcName: user_args.funcName
  })
}

function makeOp(user_args) {
  return pcompile(user_args)
}

var assign_ops = {
  mul:  "*",
  div:  "/",
}
;(function(){
  for(var id in assign_ops) {
    var op = assign_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a","b","c"],
             body: "a=b"+op+"c"},
      funcName: id
    })
    exports[id+"s"] = makeOp({
      args: ["array", "array", "scalar"],
      body: {args:["a","b","s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"seq"] = makeOp({
      args: ["array","scalar"],
      body: {args:["a","s"],
             body:"a"+op+"=s"},
      rvalue: true,
      funcName: id+"seq"
    })
  }
})();

exports.assign = makeOp({
  args:["array", "array"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assign" })
