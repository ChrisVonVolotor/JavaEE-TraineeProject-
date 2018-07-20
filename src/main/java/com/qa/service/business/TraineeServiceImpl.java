package com.qa.service.business;

import javax.inject.Inject;

import org.apache.log4j.Logger;

import coms.qa.service.repository.TraineeRepository;

public class TraineeServiceImpl implements TraineeService {
	private static final Logger LOGGER = Logger.getLogger(TraineeService.class);

	@Inject
	private TraineeRepository repo;

	public String getAllTrainees() {
		LOGGER.info("In TraineeServiceImpl getAllAccounts ");
		return repo.getAllTrainee();

	}

	public String addTrainee(String trainee) {
		LOGGER.info("In TraineeServiceImpl addTrainee ");
		return repo.createTrainee(trainee);
	}

	public String updateTrainee(Long id, String trainee) {
		LOGGER.info("In TraineeServiceImpl addTrainee ");
		return repo.updateTrainee(id, trainee);
	}

	public String deleteTrainee(Long id) {
		LOGGER.info("In TraineeServiceImpl deleteTrainee ");
		return repo.deleteTrainee(id);
	}

}
