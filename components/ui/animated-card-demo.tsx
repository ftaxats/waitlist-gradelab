import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/animated-card-diagram"
import { Visual2 } from "@/components/ui/animated-card-diagram"

export default function AnimatedCardDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <AnimatedCard>
        <CardVisual>
          <Visual2 mainColor="#ff6900" secondaryColor="#f54900" />
        </CardVisual>
        <CardBody>
          <CardTitle>AI-Powered Grading</CardTitle>
          <CardDescription>
            98% accuracy with instant feedback
          </CardDescription>
        </CardBody>
      </AnimatedCard>
      
      <AnimatedCard>
        <CardVisual>
          <Visual2 mainColor="#3b82f6" secondaryColor="#1d4ed8" />
        </CardVisual>
        <CardBody>
          <CardTitle>10x Faster Processing</CardTitle>
          <CardDescription>
            Complete exams in seconds, not hours
          </CardDescription>
        </CardBody>
      </AnimatedCard>
      
      <AnimatedCard>
        <CardVisual>
          <Visual2 mainColor="#10b981" secondaryColor="#059669" />
        </CardVisual>
        <CardBody>
          <CardTitle>Smart Analytics</CardTitle>
          <CardDescription>
            Detailed insights and performance tracking
          </CardDescription>
        </CardBody>
      </AnimatedCard>
    </div>
  )
}
