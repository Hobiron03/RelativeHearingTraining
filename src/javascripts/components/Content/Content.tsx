import React from "react";
import Config from "../Config/Config";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const Content = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Config></Config>
        </CardContent>
      </Card>
    </div>
  );
};

export default Content;
