package thedrivers.upbus.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import thedrivers.upbus.domain.GoodsInventory;
import thedrivers.upbus.mapper.GoodsMapper;

@Service
@Transactional
public class GoodsService {
	private static final Logger log = LoggerFactory.getLogger(ScrapService.class);
	
	private final GoodsMapper goodsMapper;
	
	public GoodsService(GoodsMapper goodsMapper) {
		this.goodsMapper = goodsMapper;
	}
	//개인위탁판매 재고 테이블 리스트
	public List<GoodsInventory> getGoodsInventory(){
		System.out.println("MemberSellManage");
		List<GoodsInventory> goodsInventoryList = goodsMapper.getGoodsInventory();
		log.info("개인위탁판매 재고 리스트 : {}", goodsInventoryList);
		return goodsInventoryList;
	}
}
