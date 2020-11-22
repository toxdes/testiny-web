import * as React from "react";
import { Grid} from '../../../../components';
import { AnswerStatus } from "../../../../store/types";
import {SymbolInfo} from './QuestionState';

interface SymbolsInfoProps{
  containerProps?:any;
}

export default function SymbolsInfo({containerProps}:SymbolsInfoProps){
    return(<Grid {...containerProps} gridTemplateAreas={`
      "symbol_1 symbol_2"
      "symbol_3 symbol_4"
      "symbol_5 symbol_5"
    `} gridTemplateRows="1fr 1fr 1fr" gridTemplateColumns="1fr 1fr">
            <SymbolInfo
              symbol={AnswerStatus.ANSWERED}
              containerProps={{ m: "2", gridArea:"symbol_1" }}
            />
            <SymbolInfo
              symbol={AnswerStatus.NOT_VISITED}
              containerProps={{ m: "2",gridArea:"symbol_2" }}
            />
            <SymbolInfo
              symbol={AnswerStatus.NOT_ANSWERED}
              containerProps={{ m: "2",gridArea:"symbol_3" }}
            />
            <SymbolInfo
              symbol={AnswerStatus.MARKED_FOR_REVIEW}
              containerProps={{ m: "2", gridArea:"symbol_4" }}
            />
        <SymbolInfo
          symbol={AnswerStatus.MARKED_FOR_REVIEW_AND_ANSWERED}
          containerProps={{ mx: "2",gridArea:"symbol_5" }}
        />
      </Grid>);
}