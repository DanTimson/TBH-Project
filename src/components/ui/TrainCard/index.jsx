import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { TrainCardDetailsSection } from "./TrainCardDetailsSection";
import { TrainCardHeaderSection } from "./TrainCardHeaderSection";

export default function TrainCard() {
  return (
    <Card className="w-full max-w-[1180px] bg-base-0" data-model-id="199:1145">
      <CardContent className="flex flex-col p-6">
        <TrainCardDetailsSection />
        <TrainCardHeaderSection />
      </CardContent>
    </Card>
  );
}
