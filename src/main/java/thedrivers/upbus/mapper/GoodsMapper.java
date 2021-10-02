package thedrivers.upbus.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import thedrivers.upbus.domain.GoodsInventory;

@Mapper
public interface GoodsMapper {
	// 개인위탁판매 재고 리스트 조회
	public List<GoodsInventory> getGoodsInventory();
}
