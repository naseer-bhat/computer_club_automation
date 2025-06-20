import{Router} from  "express"
const router=Router()
router.get("/welcome",()=>{
  res.send("welcome to my project")
})
export default router