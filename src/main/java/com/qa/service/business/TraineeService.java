package com.qa.service.business;

public interface TraineeService {
	
	String getAllTrainees();

	String addTrainee(String trainee);

	String updateTrainee(Long id, String trainee);

	String deleteTrainee(Long id);
}
