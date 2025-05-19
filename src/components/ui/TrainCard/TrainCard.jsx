import { Card, CardContent } from "../Card";
import React from "react";
import TrainDetails from "./TrainDetails";
import TrainHeader from "./TrainHeader";

export default function TrainCard() {
  return (
    <Card className="train-card">
      <CardContent className="train-card-content">
        <TrainHeader />
        <TrainDetails />
      </CardContent>
    </Card>
  );
}