package com.salesreport.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class KpiDTO {
    private BigDecimal totalRevenue;
    private BigDecimal totalProfit;
    private Long totalOrders;
    private BigDecimal avgOrderValue;
}
