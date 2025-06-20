import{Router} from  "express"
const router=Router()
router.get("/welcome",async (req,res)=>{
  res.send("welcome to my project")
})
export default router