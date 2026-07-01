package com.salesreport.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class MonthlyTrendDTO {

    private String month;
    private BigDecimal revenue;

}