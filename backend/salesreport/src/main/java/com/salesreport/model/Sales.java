package com.salesreport.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name="sales")
@Data
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Product_ID")
    private int productId;

    @Column(name = "Sale_Date")
    private LocalDate saleDate;

    @Column(name = "Sales_Rep")
    private String salesRep;

    @Column(name = "Region")
    private String region;

    @Column(name = "Sales_Amount")
    private BigDecimal salesAmount;

    @Column(name = "Quantity_Sold")
    private Integer quantitySold;

    @Column(name = "Product_Category")
    private String productCategory;

    @Column(name = "Unit_Cost")
    private BigDecimal unitCost;

    @Column(name = "Unit_Price")
    private BigDecimal unitPrice;

    @Column(name = "Customer_Type")
    private String customerType;

    @Column(name = "Discount")
    private BigDecimal discount;

    @Column(name = "Payment_Method")
    private String paymentMethod;

    @Column(name = "Sales_Channel")
    private String salesChannel;
    @Column(name = "Region_and_Sales_Rep")
    private String regionAndSalesRep;
}

