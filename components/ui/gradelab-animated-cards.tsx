import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/animated-card-diagram"
import { Visual2 } from "@/components/ui/animated-card-diagram"

export default function GradelabAnimatedCards() {
  return (
    <div className="flex flex-col items-center gap-4 scale-75 md:scale-90 lg:scale-100">
      {/* Question Paper Generation Card */}
      <AnimatedCard className="w-[320px] md:w-[356px]">
        <CardVisual className="h-[160px] md:h-[180px] w-[320px] md:w-[356px]">
          <Visual2 
            mainColor="#8b5cf6" 
            secondaryColor="#a855f7" 
            gridColor="#80808020"
          />
        </CardVisual>
        <CardBody>
          <CardTitle>Smart Question Generation</CardTitle>
          <CardDescription>
            Blooms taxonomy, MCQ, long answer, short answer, fill in the blanks
          </CardDescription>
        </CardBody>
      </AnimatedCard>
      
      {/* Auto Grading Card */}
      <AnimatedCard className="w-[320px] md:w-[356px]">
        <CardVisual className="h-[160px] md:h-[180px] w-[320px] md:w-[356px]">
          <Visual2 
            mainColor="#ff6900" 
            secondaryColor="#f54900" 
            gridColor="#80808020"
          />
        </CardVisual>
        <CardBody>
          <CardTitle>Auto Grading System</CardTitle>
          <CardDescription>
            Handwritten & digital grading with custom rubrics & style checking
          </CardDescription>
        </CardBody>
      </AnimatedCard>
      
      {/* Analytics Card */}
      <AnimatedCard className="w-[320px] md:w-[356px]">
        <CardVisual className="h-[160px] md:h-[180px] w-[320px] md:w-[356px]">
          <Visual2 
            mainColor="#10b981" 
            secondaryColor="#059669" 
            gridColor="#80808020"
          />
        </CardVisual>
        <CardBody>
          <CardTitle>Performance Analytics</CardTitle>
          <CardDescription>
            Historical performance, growth tracking & personalized suggestions
          </CardDescription>
        </CardBody>
      </AnimatedCard>

      {/* Question Types Card */}
      <AnimatedCard className="w-[320px] md:w-[356px]">
        <CardVisual className="h-[160px] md:h-[180px] w-[320px] md:w-[356px]">
          <Visual2 
            mainColor="#3b82f6" 
            secondaryColor="#1d4ed8" 
            gridColor="#80808020"
          />
        </CardVisual>
        <CardBody>
          <CardTitle>Multiple Question Types</CardTitle>
          <CardDescription>
            MCQ, essay, short answer, fill in blanks, true/false, matching
          </CardDescription>
        </CardBody>
      </AnimatedCard>

      {/* Handwriting Recognition Card */}
      <AnimatedCard className="w-[320px] md:w-[356px]">
        <CardVisual className="h-[160px] md:h-[180px] w-[320px] md:w-[356px]">
          <Visual2 
            mainColor="#f59e0b" 
            secondaryColor="#d97706" 
            gridColor="#80808020"
          />
        </CardVisual>
        <CardBody>
          <CardTitle>Advanced OCR Technology</CardTitle>
          <CardDescription>
            Handwriting recognition for different styles & writing patterns
          </CardDescription>
        </CardBody>
      </AnimatedCard>
    </div>
  )
}
