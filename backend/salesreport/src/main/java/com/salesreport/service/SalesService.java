package com.salesreport.service;

import com.salesreport.dto.*;
import com.salesreport.model.Sales;
import com.salesreport.repository.SalesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SalesService {

    private final SalesRepository repo;

    public KpiDTO getKpis() {
        return new KpiDTO(
                repo.getTotalRevenue(),
                repo.getTotalProfit(),
                repo.getTotalOrders(),
                repo.getAvgOrderValue()
        );
    }

    public List<GroupedSalesDTO> getByRegion()   { return repo.getRevenueByRegion(); }
    public List<GroupedSalesDTO> getByCategory() { return repo.getRevenueByCategory(); }
    public List<GroupedSalesDTO> getBySalesRep() { return repo.getRevenueBySalesRep(); }
//    public List<MonthlyTrendDTO> getMonthlyTrend(){ return repo.getMonthlyTrend(); }
    public List<Sales> getAllRecords()        { return repo.findAll(); }
}
