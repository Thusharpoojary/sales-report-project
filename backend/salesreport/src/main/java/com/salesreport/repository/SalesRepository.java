package com.salesreport.repository;

import com.salesreport.dto.GroupedSalesDTO;
import com.salesreport.dto.MonthlyTrendDTO;
import com.salesreport.model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.List;

public interface SalesRepository extends JpaRepository<Sales,Integer> {
    // KPIs
    @Query("SELECT SUM(s.salesAmount) FROM Sales s")
    BigDecimal getTotalRevenue();

    @Query("SELECT SUM(s.salesAmount - s.unitCost * s.quantitySold) FROM Sales s")
    BigDecimal getTotalProfit();

    @Query("SELECT COUNT(s) FROM Sales s")
    Long getTotalOrders();

    @Query("SELECT AVG(s.salesAmount) FROM Sales s")
    BigDecimal getAvgOrderValue();

    // Revenue by Region
    @Query("SELECT new com.salesreport.dto.GroupedSalesDTO(s.region, SUM(s.salesAmount), COUNT(s)) " +
            "FROM Sales s GROUP BY s.region ORDER BY SUM(s.salesAmount) DESC")
    List<GroupedSalesDTO> getRevenueByRegion();

    // Revenue by Category
    @Query("SELECT new com.salesreport.dto.GroupedSalesDTO(s.productCategory, SUM(s.salesAmount), COUNT(s)) " +
            "FROM Sales s GROUP BY s.productCategory ORDER BY SUM(s.salesAmount) DESC")
    List<GroupedSalesDTO> getRevenueByCategory();

    // Revenue by Sales Rep
    @Query("SELECT new com.salesreport.dto.GroupedSalesDTO(s.salesRep, SUM(s.salesAmount), COUNT(s)) " +
            "FROM Sales s GROUP BY s.salesRep ORDER BY SUM(s.salesAmount) DESC")
    List<GroupedSalesDTO> getRevenueBySalesRep();

    // Monthly Trend
//    @Query("SELECT new com.salesreport.dto.MonthlyTrendDTO(FUNCTION('DATE_FORMAT', s.saleDate, '%Y-%m'), SUM(s.salesAmount)) " +
//            "FROM Sales s GROUP BY FUNCTION('DATE_FORMAT', s.saleDate, '%Y-%m') ORDER BY 1")
//    List<MonthlyTrendDTO> getMonthlyTrend();
}
