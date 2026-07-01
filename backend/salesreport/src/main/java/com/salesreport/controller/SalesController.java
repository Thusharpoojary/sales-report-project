package com.salesreport.controller;

import com.salesreport.dto.*;
import com.salesreport.model.Sales;
import com.salesreport.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/sales")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class SalesController {

    private final SalesService service;

    @GetMapping("/kpis")
    public KpiDTO getKpis() { return service.getKpis(); }

    @GetMapping("/by-region")
    public List<GroupedSalesDTO> byRegion() { return service.getByRegion(); }

    @GetMapping("/by-category")
    public List<GroupedSalesDTO> byCategory() { return service.getByCategory(); }

    @GetMapping("/by-sales-rep")
    public List<GroupedSalesDTO> bySalesRep() { return service.getBySalesRep(); }

//    @GetMapping("/monthly-trend")
//    public List<MonthlyTrendDTO> monthlyTrend() { return service.getMonthlyTrend(); }

    @GetMapping("/all")
    public List<Sales> allRecords() { return service.getAllRecords(); }
}
