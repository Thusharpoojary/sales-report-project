package com.salesreport.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class GroupedSalesDTO {

    private String name;
    private BigDecimal revenue;
    private Long orders;

}